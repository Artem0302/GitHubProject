const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');
const keys = require('../keys');
const returnEmail = require('../emails');
const regEmail = require('../emails/confirmEmail');
const db = require('../utils/database');

const transporter = nodemailer.createTransport(
  sendgrid({
    auth: {api_key: keys.SENDGRID_API_KEY},
  }),
);

function getRandomInt() {
  return (
    `${Math.floor(Math.random() * 10)}` +
    `${Math.floor(Math.random() * 10)}` +
    `${Math.floor(Math.random() * 10)}` +
    `${Math.floor(Math.random() * 10)}`
  );
}

class authController {
  async registration(req, res) {
    try {
      if (req.body.send) {
        const email = req.body.send;
        const currentPerson = await db.query(
          `SELECT email FROM users WHERE email = ($1)`,
          [email],
        );
        if (currentPerson.rows[0]) {
          return res.status(400).json({message: 'email already used'});
        }
        const confCode = getRandomInt();
        await transporter.sendMail(regEmail(req.body.send, confCode));
        return res.json({code: confCode});
      } else {
        const {name, surname, password, email, type, dateofbirth} =
          req.body.user;
        db.query(
          `INSERT INTO users (name,surname, password, email, type, dateofbirth) values ($1, $2, $3, $4, $5, $6) RETURNING *`,
          [name, surname, password, email, type, dateofbirth],
        );
        res.json({message: 'all ok'});
      }
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'registration error'});
    }
  }
  async returnPassword(req, res) {
    try {
      const {email} = req.body;
      const password = await db.query(
        `SELECT password FROM users WHERE email=$1`,
        [email],
      );
      if (!password.rows[0]){
        return res.status(400).json({message: 'returning  error'});
      }
      console.log(password);
      await transporter.sendMail(
        returnEmail(email, password.rows[0].password),
      );
      res.json({message: 'all ok'});
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'returning  error'});
    }
  }
  async login(req, res) {
    try {
      const {email, password} = req.body;
      const user = await db.query(
        'SELECT * FROM users WHERE email=$1 AND password=$2',
        [email, password],
      );
      if (!user.rows[0]) {
        return res.status(400).json({message: 'wrong password or email'});
      }
      return res.json({
        user: user.rows[0],
        isSignedIn: true,
        correctPassword: true,
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'login error'});
    }
  }
  async getUsers(req, res) {
    try {
      const users = await db.query('SELECT * FROM users');
      res.json(users.rows[0]);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'error'});
    }
  }
  async getOneUser(req, res) {
    try {
      const id = req.params.id;
      const user = await db.query('SELECT * FROM users WHERE id=$1', [id]);
      res.json(user.rows[0]);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'error'});
    }
  }
  async deleteUser(req, res) {
    try {
      const id = req.params.id;
      const user = await db.query('DELETE FROM users WHERE id=$1', [id]);
      res.json(user.rows[0]);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'error'});
    }
  }
}

module.exports = new authController();

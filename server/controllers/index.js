const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');
const {SENDGRID_API_KEY} = require('../keys');
const returnEmail = require('../emails');
const regEmail = require('../emails/confirmEmail');
const db = require('../utils/database');

const transporter = nodemailer.createTransport(
  sendgrid({
    auth: {api_key: SENDGRID_API_KEY},
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
      const confCode = getRandomInt();
      const {name, surname, password, email, type, dateofbirth} = req.body;
      const newPerson = await db.query(
        `INSERT INTO users (name,surname, password, email, type, dateofbirth) values ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [name, surname, password, email, type, dateofbirth],
      );
      res.json({user: newPerson.rows[0], confirmation: confCode});
      await transporter.sendMail(
        regEmail('artem_alieksieiev@knu.ua', confCode),
      );
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
      await transporter.sendMail(
        returnEmail('artem_alieksieiev@knu.ua', password),
      );
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'registration error'});
    }
  }
  async login(req, res) {
    try {
      const {email, password} = req.body;
      const user = db.query(
        'SELECT * FROM users WHERE email=$1 AND password=$2',
        [email, password],
      );
      if (!user) {
        return res.status(400).json({message: 'wrong password or email'});
      }
      return res.json({
        user: user.rows[0],
        isSignedIn: true,
        correctPassword: true,
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'registration error'});
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

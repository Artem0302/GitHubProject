const db = require('../utils/database');

class cvController {
  async createCV(req, res) {
    try {
      const {
        user_id,
        phone,
        speciality,
        softSkills,
        workExp,
        education,
        skills,
      } = req.body;
      const newCV = await db.query(
        `INSERT INTO users (user_id, phone, speciality, softSkills, workExp, education, skills) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [user_id, phone, speciality, softSkills, workExp, education, skills],
      );
      res.json(newCV.rows[0]);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'error'});
    }
  }
  async getCVs(req, res) {
    try {
      const cvs = await db.query('SELECT * FROM adverts');
      res.json(cvs.rows[0]);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'error'});
    }
  }
  async getOneCV(req, res) {
    try {
      const id = req.params.id;
      const cv = await db.query('SELECT * FROM adverts WHERE id=$1', [id]);
      res.json(cv.rows[0]);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'error'});
    }
  }
  async deleteCV(req, res) {
    try {
      const id = req.params.id;
      const cv = await db.query('DELETE FROM cvs WHERE id=$1', [id]);
      res.json(cv.rows[0]);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'error'});
    }
  }
}

module.exports = new cvController();

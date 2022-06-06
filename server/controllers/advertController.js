const db = require('../utils/database');

class advertController {
  async createAdvert(req, res) {
    try {
      const {user_id, description, link, salary, title} = req.body.advert;
      const newAdvert = await db.query(
        `INSERT INTO adverts (user_id, description, link, salary, title) values ($1, $2, $3, $4, $5) RETURNING *`,
        [user_id, description, link, salary, title],
      );
      res.json(newAdvert.rows[0]);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'error'});
    }
  }
  async getAdverts(req, res) {
    try {
      if(req.body.userId){
        const user_id = req.body.userId;
        const myCvs = await db.query('SELECT * FROM adverts WHERE user_id = $1',[user_id]);
        res.json(myCvs.rows);
      }else{
        const adverts = await db.query('SELECT * FROM adverts');
        res.json(adverts.rows);
      }
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'error'});
    }
  }
  async getOneAdvert(req, res) {
    try {
      const id = req.params.id;
      const advert = await db.query('SELECT * FROM adverts WHERE id=$1', [id]);
      res.json(advert.rows[0]);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'error'});
    }
  }
  async deleteAdvert(req, res) {
    try {
      const id = req.params.id;
      const advert = await db.query('DELETE FROM adverts WHERE id=$1', [id]);
      console.log(advert.rows);
      res.json(advert.rows[0]);
    } catch (e) {
      console.log(e);
      res.status(400).json({message: 'error'});
    }
  }
}

module.exports = new advertController();

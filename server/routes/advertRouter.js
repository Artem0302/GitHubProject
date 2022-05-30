const Router = require('express');
const router = new Router();
const controller = require('../controllers/advertController')

router.post('/create-advert',controller.createAdvert);
router.post('/get-adverts',controller.getAdverts);
router.post('/get-one-advert',controller.getOneAdvert);
router.post('/delete-advert',controller.deleteAdvert);

module.exports = router;

const Router = require('express');
const router = new Router();
const controller = require('../controllers/advertController')

router.post('/create-advert',controller.createAdvert);
router.get('/get-adverts',controller.getAdverts);
router.post('/get-one-advert',controller.getOneAdvert);
router.delete('/delete-advert',controller.deleteAdvert);
router.put('/put-advert',controller.putAdvert);

module.exports = router;

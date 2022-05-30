const Router = require('express');
const router = new Router();
const controller = require('../controllers/cvControllers')

router.post('/create-cv',controller.createCV);
router.post('/get-cvs',controller.getCVs);
router.post('/get-one-cv',controller.getOneCV);
router.post('/delete-cv',controller.deleteCV);

module.exports = router;

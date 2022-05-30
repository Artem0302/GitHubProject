const Router = require('express');
const router = new Router();
const controller = require('../controllers')

router.post('/login',controller.login);
router.post('/register',controller.registration);
router.post('/return-password',controller.returnPassword);

module.exports = router;

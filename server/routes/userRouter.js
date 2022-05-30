const Router = require('express');
const router = new Router();
const controller = require('../controllers')

router.post('/get-users',controller.getUsers);
router.post('/get-one-user',controller.getOneUser);
router.post('/delete-user',controller.deleteUser);

module.exports = router;

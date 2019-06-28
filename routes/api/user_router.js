/*
 * @Description: user router
 */

const Router = require('koa-router');
const router = new Router();
const user_controller = require('./../../app/controllers/user_controller');

router.get('/get', user_controller.get);
router.post('/post', user_controller.post);
router.post('/login', user_controller.login);
router.post('/register', user_controller.register);
router.post('/update/user', user_controller.updateUserInfo);

module.exports = router;
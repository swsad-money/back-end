/*
 * @Description: example router 
 */

const Router = require('koa-router');
const router = new Router();
const example_controller = require('./../../app/controllers/example_controller');

router.get('/example/get', example_controller.getExample);
router.post('/example/post', example_controller.postExample);

module.exports = router;
const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.lucRoute);
routes.get('/omar', lesson1Controller.omarRoute);

module.exports = routes;
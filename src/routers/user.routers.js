const routers = require('express').Router()
const UserControllers = require('../controllers/user.controllers');

routers.get('/FetchUser', UserControllers.fetchUser);
routers.post('/login', UserControllers.userLogin);
routers.post('/CreateUser', UserControllers.createUser);
routers.put('/UpdateUser', UserControllers.updateUser);

module.exports = routers;
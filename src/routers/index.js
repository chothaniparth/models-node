const routers = require('express').Router()
const userRouters = require('./user.routers')

routers.use('/user', userRouters);

module.exports = routers;
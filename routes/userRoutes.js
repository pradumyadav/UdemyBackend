const { Signup, Login } = require('../Controller/controller');


const userRoutes = require('express').Router();


userRoutes.post('/register',Signup)
userRoutes.post('/login',Login)



module.exports = userRoutes
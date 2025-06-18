const { Router } = require('express');
const AuthController = require('../AuthController.js');
const { check } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware.js');

const authrout = new Router;

authrout.post('/registration',[
    check("username", "заполнете имя пользователя").notEmpty(),
    check("password", "заполните пароль").isLength({min: 4}

    )],
     AuthController.registration);
authrout.post('/login', authMiddleware, AuthController.login);
authrout.get('/test',  AuthController.getTest);


module.exports = authrout;
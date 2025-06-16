import { Router } from "express";
import AuthController from "../AuthController.js";
import { check } from "express-validator";
import authMiddleware from "../middleware/authMiddleware.js";

const authrout = new Router;

authrout.post('/registration',[
    check("username", "заполнете имя пользователя").notEmpty(),
    check("password", "заполните пароль").isLength({min: 4}

    )],
     AuthController.registration);
authrout.post('/login', authMiddleware, AuthController.login);
authrout.get('/test',  AuthController.getTest);


export default authrout;
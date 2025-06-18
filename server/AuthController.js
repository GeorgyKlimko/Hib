const Users = require('./models/Users.js');
const Role = require('./models/Role.js');
const bcrypt = require('bcryptjs');
const sec = require('./config.js');
const jsonwebtoken = require('jsonwebtoken');

const { validationResult } = require('express-validator');

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }

    return jsonwebtoken.sign(payload, sec.secret, {expiresIn: "24h"})
}
class AuthController {
    async registration(req, res) {
      
        try {
            const error = validationResult(req);

            if(!error.isEmpty()){
                return res.status(400).json({mesesage: 'Я вырежу всю твою семью, сосунок', error})
            }
            const {username, password} = req.body
            
            const candidate = await Users.findOne({username})

            if(candidate) {
                return res.status(400).json({mesesage: "Долбаеб с таким именем уже существует"})
            }

            const hasPasword = bcrypt.hashSync(password, 7);
            const userRole = await Role.findOne({value: 'user'})
            const user =  new Users({username: username, password: hasPasword, roles: userRole.value})
            await user.save();
            const token = generateAccessToken(user._id, user.roles)
            res.cookie('token', token, { httpOnly: true }).json({ message: 'Сукины дети успешно зареганы' });


        } catch(e) {
            console.log(e)
            return res.json(e)
        }

    }

    async login(req, res) {
        try {
            const {username, password} = req.body;
            const user = await Users.findOne({username})
            if(!user) {
                return res.status(400).json({mesesage: 'пользователь не найден'})
            }

            const validPassword = bcrypt.compareSync(password, user.password)

            if(!validPassword){
                return res.status(400).json({mesesage: 'неверный пароль'})
            }

            const token = generateAccessToken(user._id, user.roles)
            return res.cookie('token', token, { httpOnly: true }).status(200).json({ message: 'log ok', username: username });
        } catch(e) {

            console.log(e)
            return res.json(e)
        }
    }


    async getTest(req, res) {
        try{
            const userRole = new Role()
            const adminRole = new Role({value: 'admin'})
            const users = await Users.find()
            await userRole.save()
            await adminRole.save()
            
            res.json({users: users})
        } catch(e) {
            res.json(e)
        }
    }

    
}

module.exports = new AuthController;
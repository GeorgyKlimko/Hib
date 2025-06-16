import  jwt  from "jsonwebtoken"
import sec from "../config.js"


export default (roles) => {
    return (req, res, next) => {
        if(req.method === "OPTIONS") {
        next()
    }

    try {
        const token = req.headers.authorization.split(" ")[1]

        if(!token) {
            return res.status(403).json(' пользователь не авторизован')

        }

        const {roles: userRole} = jwt.verify(token, sec.secret)
        let hasRol = false
        userRole.forEach(role => {
            if(roles.includes(role)) {
                hasRol = true;
            }
        });

        if(!hasRol){
            return res.status(404).json('у вас нет доступа')
        }

        next()

    } catch(e) {
        return res.status(400).json("пользователь не авторизован", e)

    }
    }

}
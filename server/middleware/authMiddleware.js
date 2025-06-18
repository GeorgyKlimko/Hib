const jwt = require('jsonwebtoken');
const sec = require('../config.js');


module.exports = (req, res, next) => {
   const token = req.cookies.token;

   try {
        req.user = jwt.verify(token, sec.secret)
        next()
   } catch(e) {
     res.clearCookie("token")
     res.status(401).json(' no ok')
   }
}
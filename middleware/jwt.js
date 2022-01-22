const jwt = require('jsonwebtoken')

function verifyToken(req, res, next){
    let token = req.get('Authorization')

    if(token === null){
        res.status(403).json({message: "login please"})
    }
    jwt.verify(token, process.env.JWT_SECRET, (error, result)=>{
        if(error){
            res.status(400).json({message: "do you the right access?"})
        }
        if(result === false){
            res.status(403).json({message: "login please"})
        }
        next()
    })
}
module.exports = verifyToken
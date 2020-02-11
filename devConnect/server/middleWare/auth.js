const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function(req, res, next) {
    // get token from header
    const token = req.header('x-auth-token')
    
    // check if no token
    if(!token) {
        return res.status(401).json({
            msg: 'No token, authorization denied'
        })
    } 
    
    // verify token
    try {
        console.log('token: ', token)
        const decoded = jwt.decode(token, config.get('jwtToken'))
        console.log(decoded)
        req.user = decoded.user
        next()
        
    } catch (err) {
        res.status(401).json({
            msg: 'Token is not valid'
        })
    }
}
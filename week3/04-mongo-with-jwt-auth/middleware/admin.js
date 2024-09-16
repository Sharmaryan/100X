// will remove later
const SECRET_KEY = 'hey_secret'
const jwt = require('jsonwebtoken');
function adminMiddleware(req, res, next) {
    let token = req.headers['authorization']
    token = token.replace(/^Bearer\s+/, "");
    if (token) {
        jwt.verify(token, SECRET_KEY)
        next();
    }

}

module.exports = adminMiddleware;
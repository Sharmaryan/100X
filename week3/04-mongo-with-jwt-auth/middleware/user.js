// will remove later
const SECRET_KEY = 'hey_secret'
const jwt = require('jsonwebtoken');

function userMiddleware(req, res, next) {
    let token = req.headers['authorization']
    token = token.replace(/^Bearer\s+/, "");
    if (token) {
        const data = jwt.verify(token, SECRET_KEY)
        res.locals.username = data
        next();
    }

}

module.exports = userMiddleware;
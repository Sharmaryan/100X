const { User } = require("../db")

async function userMiddleware(req, res, next) {
    const username = req.headers.username
    const password = req.headers.password
    const payload = { username, password }
    if (username && password) {
        const admin = await User.findOne(payload)
        if (admin?.id) {
            next()
        }
        else {
            res.send('user not found, try again')
        }
    }
}

module.exports = userMiddleware;
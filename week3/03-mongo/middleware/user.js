const { User } = require("../db")

async function userMiddleware(req, res, next) {
    const username = req.headers.username
    const password = req.headers.password
    const payload = { username, password }
    if (username && password) {
        const user = await User.findOne(payload)
        if (user?.id) {
            res.locals.user = user
            next()
        }
        else {
            res.send('user not found, try again')
        }
    }
}

module.exports = userMiddleware;
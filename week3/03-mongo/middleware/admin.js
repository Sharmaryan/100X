const { Admin } = require("../db")

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    const username = req.headers.username
    const password = req.headers.password
    const payload = {username, password}
    if (username && password) {
        const admin = await Admin.findOne(payload)
        if (admin?.id) {
            next()
        }
        else {
            res.send('admin not found, try again')
        }
    }
}

module.exports = adminMiddleware;

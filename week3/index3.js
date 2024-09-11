// to understand middleware

const express = require('express');
const app = express();

// const isOldEnough = (age) => age >= 14
const isOldEnoughMiddleware = (req, res, next) => {
    if (req.query.age >= 14) {
        next()
    }
    else {
        res.status(404).json({ msg: "You are not allowed to ride" })
    }
}

app.get('/ride1',isOldEnoughMiddleware, (_, res) => {
    res.json({ "msg": "You have successfully ridden the ride 1" })
})

app.get('/ride2', isOldEnoughMiddleware, (_, res) => {
    res.json({ "msg": "You have successfully ridden the ride 2" })
})

app.listen(3000)
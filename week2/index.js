const express = require('express')
const app = express()

const sum = (n) => {
    let num = 0
    for (let i = 0; i <= n; i++) {
        num = num + i
    }
    return num
}

app.get('/', (req, res) => {
    const n = req.query.n
    const ans = sum(n)
    res.send('your answer is ' + ans)
})


app.listen(3000)
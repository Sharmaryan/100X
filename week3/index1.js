const express = require('express')
const zod = require('zod')
const app = express()
const schema = zod.array(zod.number())
app.use(express.json())

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    if (!response.success) {
        res.status(411).json({ msg: 'Invalid inputs' })
    }
    else {
        res.send({ response })
    }
})

app.use((err, req, res, next) => {
    res.json({ msg: 'something went wrong' })
})

app.listen(3000)
const express = require('express')

const app = express()

app.get("/", (req: any, res:any) => {
    res.json({
        'message':'hello word'
    })
})


app.listen(3000)

import {DEFAULT_PORT} from '@repo/common/config'
const express = require('express')

const app = express()
console.log(DEFAULT_PORT)

app.get("/", (req: any, res:any) => {
    res.json({
        'message':'hello word'
    })
})


app.listen(3000)

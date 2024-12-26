import express from 'express'
import { createClient } from 'redis'

const app = express()
app.use(express.json())
const client = createClient()
client.connect()

app.post('/submit', async (req, res) => {
    const {problemId, userId, code, language} = req.body
    try{

        await client.lPush('submission', JSON.stringify({problemId, userId, code, language}))
        res.json({
            message:'Submission received successfully'
        })
    }
    catch(err){
        res.json(err)
    }
})


app.listen(3000)
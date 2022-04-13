import express from "express"
import bodyParser from "body-parser"

const app = express()

app.use(bodyParser.json())

const porta = 8000

app.get("/", (req, res) => {
    res.send('Api online!')
})



app.listen(porta, () => (console.log("api rodando na porta " + porta)))
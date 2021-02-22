import express from 'express'

const app = express();

app.get("/", (req, res) => {
    res.send({ message: "Hello! Bem vindo(a) ao NLW#04" })
})

app.post("/", (req, res) => {
    res.send({ message: "Requisiçao Post" })
})

app.listen(3333, () => console.log('Server is running'))
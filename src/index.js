const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const app = express()
var dotenv = require('dotenv')
dotenv.config()
var DB_KEY = process.env.MONGO_DB_API_KEY

mongoose.connect(DB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(cors()) //libera o acesso interno para todos
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333)
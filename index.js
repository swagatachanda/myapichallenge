const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()

app.use(express.json())

const userRoute = require('./routes/userRoute')
app.use('/challenge', userRoute)

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})

app.listen(process.env.PORT || 3000)
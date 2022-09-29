const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')

const connectDb = require('./config/db')

const PORT = process.env.PORT || 5000

connectDb()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/users', require('./routes/userRoutes'))


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
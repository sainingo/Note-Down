const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log(`Database connected on ${conn.connection.host}`.cyan.underline)
        
    } catch (error) {
        console.log(error)

        process.exit(1)
    }
}

module.exports = connectDb
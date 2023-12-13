import mongoose from 'mongoose'

export default async function connectDB() {
    try {
        const connect = await mongoose.connect(
            `${process.env.MONGO_URI}`
        )
        console.log("DB connected to ", connect.connection.host)
    } catch (err) {
        console.log("Error connecting to DB", err)
        process.exit(1)
    }
}

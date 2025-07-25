import mongoose from "mongoose";

// Connnect to the MongoDB database
const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/lms2`)
}

export default connectDB;
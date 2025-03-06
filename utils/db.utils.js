import mongoose from "mongoose";

async function connectDB() {
    const { MONGO_URI } = process.env;

    try {
        await mongoose.connect(MONGO_URI)
        console.log('MongoDB connected');
    } catch (error) {
        console.log('MongoDB connection error');
        console.log(error);
        
        throw error
    }
    return mongoose.connection;
};

export default connectDB
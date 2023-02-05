import express from 'express';
const app = express();
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB');
      } catch (error) {
        throw (error);
      }
}

mongoose.connection.on("disconnection", () => {
 console.log("MongoDB disconnected");   
});

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");   
   });

app.listen(3000, () => {
    connect();
    console.log('Server is running on port 3000');
}
)
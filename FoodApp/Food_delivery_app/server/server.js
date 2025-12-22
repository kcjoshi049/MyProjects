// here we will create api for our food app by using our mongodb.

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import route from './Routes/route.js';

const app = express();
app.use(cors());
app.use(express.json());

// Root route (fix for Cannot GET /)
app.get("/", (req, res) => {
  res.send("Food Delivery API is running");
});

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("The database connected successfully.");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const PORT = process.env.PORT || 5003;
// using routes
app.use('/fooditems',route)

let start = () =>{
  try{
    app.listen(PORT, () => {
      console.log(`API running on port ${PORT}`);
    });
  }catch(e){
    console.log(e)
  }
}

start();

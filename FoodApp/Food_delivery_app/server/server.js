// here we will create api for our food app by using our mongodb.

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Food").then(()=>{
    console.log("the database connected successfully.");
}).catch((err)=>{
    console.error("error :- ",err);
})

let FoodScheama = new mongoose.Schema({
    id : Number,
    name : String,
    category : String,
    rating : Number,
    isVeg : Boolean,
    img : String,
    price : Number,
    summary : String,
    isTrending : Boolean
})

let FoodItem = mongoose.model("foodItem",FoodScheama,"Food_items");

// now we will get the data in the api.

app.get("/fooditems",async (req,res)=>{
    let data = await FoodItem.find().sort({id : 1});
    res.json(data);
})

app.listen(5003,()=>{
    console.log("the api is running in the port number 5003");
})
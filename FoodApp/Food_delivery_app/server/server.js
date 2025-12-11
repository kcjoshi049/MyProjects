// here we will create api for our food app by using our mongodb.

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

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

let FoodScheama = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  rating: Number,
  isVeg: Boolean,
  img: String,
  price: Number,
  summary: String,
  isTrending: Boolean
});

let FoodItem = mongoose.model("foodItem", FoodScheama, "Food_items");

// API route
app.get("/fooditems", async (req, res) => {
  let data = await FoodItem.find().sort({ id: 1 });
  res.json(data);
});

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

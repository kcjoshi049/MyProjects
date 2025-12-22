import mongoose from 'mongoose';

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

export default FoodItem;
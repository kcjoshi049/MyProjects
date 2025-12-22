import FoodItem from '../FoodModel/db.js';

const getAllItems = async (req,res) =>{
    let data = await FoodItem.find(req.query)
    res.status(200).json(data)
}

export default getAllItems;



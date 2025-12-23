import FoodItem from "../FoodModel/db.js";

const getAllItems = async (req, res) => {
  try {
    const { category, isTrending } = req.query;

    let filter = {};

    // trending filter
    if (isTrending) {
      filter.isTrending = true;
    }

    // category filter (single or multiple)
    if (category) {
      const categories = category.split(",");
      filter.category = { $in: categories };
    }

    const data = await FoodItem.find(filter);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export default getAllItems;

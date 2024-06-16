import CategoryModel from "../models/Category.js";

export const create = async (req, res) => {
  try {
    const doc = new CategoryModel({
      name: req.body.name,
    });

    const category = await doc.save();
    res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

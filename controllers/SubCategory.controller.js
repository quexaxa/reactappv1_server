import SubCategoryModel from "../models/SubCategory.js";

export const create = async (req, res) => {
  try {
    const doc = new SubCategoryModel({
      name: req.body.name,
      category: req.body.category, // Добавляем поле category
    });

    const subCategory = await doc.save();
    res.json(subCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Что-то пошло не так',
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const subCategories = await SubCategoryModel.find();
    res.json(subCategories);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Что-то пошло не так',
    });
  }
}
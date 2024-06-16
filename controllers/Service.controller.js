import ServiceModel from "../models/service.js";

export const create = async (req, res) => {
  try {
    const doc = new ServiceModel({
      title: req.body.title, // Исправлено на title
      description: req.body.description,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      category: req.body.category,
      subCategory: req.body.subCategory,
    });

    const service = await doc.save();

    res.json(service);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const services = await ServiceModel.find()
    .populate("category", "name")
    .populate("subCategory", "name");
    res.json(services);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const service = await ServiceModel.findById(req.params.id);

    res.json(service);
  } catch {
    console.log(error);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const update = async (req, res) => {
  try {
    const service = await ServiceModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json(service);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const service = await ServiceModel.findOneAndDelete(req.params.id);
    res.json(service);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

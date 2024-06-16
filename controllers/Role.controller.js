import RoleModel from "../models/Role.js";

export const create = async (req, res) => {
  try {
    const doc = new RoleModel({
      name: req.body.name,
    });

    const role = await doc.save();
    res.json(role);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

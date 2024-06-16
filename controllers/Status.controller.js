import StatusModel from "./../models/Status.js";

export const create = async (req, res) => {
    try {
        const doc = new StatusModel({
            name: req.body.name,
        });
        const status = await doc.save();
        res.json(status);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Что-то пошло не так",
        });
    }
}

export const getAll = async (req, res) => {
    try {
        const statuses = await StatusModel.find();
        res.json(statuses);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Что-то пошло не так',
        });
    }
}
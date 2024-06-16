import FeedbackModel from "./../models/Feedback.js";

export const create = async (req, res) => {
  try {
    const doc = new FeedbackModel({
      title: req.body.title,
      user: req.body.user,
      category: req.body.category,
      description: req.body.description,
    });

    const feedback = await doc.save();
    res.json(feedback);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const feedbacks = await FeedbackModel.find()
      .populate("user", "firstName")
      .populate("category", "name")
      .populate("status", "name");
    res.json(feedbacks);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const feedback = await FeedbackModel.findById(req.params.id)
      .populate("user", "firstName")
      .populate("category", "name");
    res.json(feedback);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const getByUserId = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const userId = req.params.userId;
    console.log(`Fetching feedbacks for user ID: ${userId}`);

    const feedbacks = await FeedbackModel.find({ user: userId })
     .populate("user", "firstName")
     .populate("category", "name")
     .populate("status", "name");

    if (feedbacks.length === 0) {
      res.status(404).json({ message: "No feedbacks found for this user." });
    } else {
      res.json(feedbacks);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong.",
    });
  }
};

export const update = async (req, res) => {
  try {
    const feedback = await FeedbackModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json(feedback);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

export const remove = async (req, res) => {
  try {
    const feedback = await FeedbackModel.findOneAndDelete(req.params.id);
    res.json(feedback);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Что-то пошло не так",
    });
  }
};

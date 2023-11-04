const Doctor = require("../models/DoctorSchema");
const Review = require("../models/ReviewSchema");

const createReviewController = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.params.userId;
  const newReview = new Review(req.body);
  try {
    const savedReview = await newReview.save();
    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id },
    });
    return res
      .status(200)
      .json({ success: true, message: "Review Submitted", data: savedReview });
  } catch (error) {
    return res
      .status(404)
      .json({ success: false, message: "Error while creating Review" });
  }
};

const getAllReviewsController = async (req, res) => {
  try {
    const reviews = await Review.find({});
    return res
      .status(200)
      .json({ success: true, message: "Successful", data: reviews });
  } catch (error) {
    return res.status(404).json({ success: false, message: "Not found" });
  }
};

module.exports = { getAllReviewsController, createReviewController };

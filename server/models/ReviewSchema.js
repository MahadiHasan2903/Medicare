const mongoose = require("mongoose");
const Doctor = require("./DoctorSchema");

const reviewSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

// Middleware to calculate and log average ratings
reviewSchema.statics.calcAndLogAverageRatings = async function (doctorId) {
  const stats = await this.aggregate([
    {
      $match: { doctor: doctorId },
    },
    {
      $group: {
        _id: "$doctor",
        numOfRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  if (stats.length > 0) {
    await Doctor.findByIdAndUpdate(doctorId, {
      totalRating: stats[0].numOfRating,
      avgRating: stats[0].avgRating,
    });
  }
};

reviewSchema.post("save", function () {
  this.constructor.calcAndLogAverageRatings(this.doctor);
});

module.exports = mongoose.model("Review", reviewSchema);

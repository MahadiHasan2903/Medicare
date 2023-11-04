const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  restrictedUser,
  authMiddleware,
} = require("../middlewares/authMiddleware");

const {
  getAllReviewsController,
  createReviewController,
} = require("../controllers/reviewController");

router
  .route("/")
  .get(getAllReviewsController)
  .post(authMiddleware, restrictedUser(["patient"]), createReviewController);

module.exports = router;

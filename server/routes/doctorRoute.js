const express = require("express");
const router = express.Router();
const review = require("./reviewRoute");

const {
  updateDoctorController,
  deleteDoctorController,
  getSingleDoctorController,
  getAllDoctorsController,
  getDoctorProfileController,
} = require("../controllers/doctorController");
const {
  restrictedUser,
  authMiddleware,
} = require("../middlewares/authMiddleware");

//nested route
router.use("/:doctorId/reviews", review);

router.put(
  "/:id",
  authMiddleware,
  restrictedUser(["doctor"]),
  updateDoctorController
);
router.delete(
  "/:id",
  authMiddleware,
  restrictedUser(["doctor"]),
  deleteDoctorController
);
router.get(
  "/:id",
  authMiddleware,
  restrictedUser(["doctor"]),
  getSingleDoctorController
);
router.get(
  "/",
  authMiddleware,
  restrictedUser(["admin"]),
  getAllDoctorsController
);

router.get(
  "/profile/me",
  authMiddleware,
  restrictedUser(["doctor"]),
  getDoctorProfileController
);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  updateUserController,
  deleteUserController,
  getSingleUserController,
  getAllUsersController,
} = require("../controllers/userController");

const {
  authMiddleware,
  restrictedUser,
} = require("../middlewares/authMiddleware");

router.put(
  "/:id",
  authMiddleware,
  restrictedUser(["patient"]),
  updateUserController
);
router.delete(
  "/:id",
  authMiddleware,
  restrictedUser(["patient"]),
  deleteUserController
);
router.get(
  "/:id",
  authMiddleware,
  restrictedUser(["patient"]),
  getSingleUserController
);
router.get(
  "/",
  authMiddleware,
  restrictedUser(["admin"]),
  getAllUsersController
);

module.exports = router;

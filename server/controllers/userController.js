const User = require("../models/UserSchema");

const updateUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      data: updatedUser,
      message: "Successfully Updated",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to update" });
  }
};

const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      data: deletedUser,
      message: "Successfully Deleted",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to delete" });
  }
};

const getSingleUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      data: user,
      message: "User found successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch user" });
  }
};

const getAllUsersController = async (req, res) => {
  try {
    const allUsers = await User.find({}).select("-password");

    if (!allUsers || allUsers.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No users found" });
    }

    return res.status(200).json({
      success: true,
      data: allUsers,
      message: "Users found successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch users" });
  }
};

module.exports = {
  updateUserController,
  deleteUserController,
  getSingleUserController,
  getAllUsersController,
};

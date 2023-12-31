const User = require("../models/UserSchema");
const Booking = require("../models/BookingSchema");
const Doctor = require("../models/DoctorSchema");

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
    console.log(error);
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

const getUserProfileController = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    // Destructure the user document and exclude sensitive data
    const { password, ...userInfo } = user._doc;

    res.status(200).json({
      success: true,
      message: "Profile information retrieved successfully",
      data: { ...userInfo },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

const getMyAppointmentController = async (req, res) => {
  try {
    // Retrieve appointments from booking of a specific user
    const bookings = await Booking.find({ user: req.userId });

    // Extract unique doctor IDs from appointment bookings
    const doctorIds = [...new Set(bookings.map((el) => el.doctor.id))];

    // Retrieve doctors using doctor IDs, excluding sensitive data like passwords
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );

    res.status(200).json({
      success: true,
      message: "Appointments retrieved successfully",
      data: doctors,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

module.exports = {
  updateUserController,
  deleteUserController,
  getSingleUserController,
  getAllUsersController,
  getUserProfileController,
  getMyAppointmentController,
};

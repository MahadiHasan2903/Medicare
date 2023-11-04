const Doctor = require("../models/DoctorSchema");

const updateDoctorController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDoctor = await Doctor.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedDoctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    return res.status(200).json({
      success: true,
      data: updatedDoctor,
      message: "Doctor successfully updated",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to update doctor" });
  }
};

const deleteDoctorController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDoctor = await Doctor.findByIdAndDelete(id);

    if (!deletedDoctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    return res.status(200).json({
      success: true,
      data: deletedDoctor,
      message: "Doctor successfully deleted",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to delete doctor" });
  }
};

const getSingleDoctorController = async (req, res) => {
  try {
    const { id } = req.params;
    const foundDoctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");

    if (!foundDoctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    return res.status(200).json({
      success: true,
      data: foundDoctor,
      message: "Doctor found successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch doctor" });
  }
};

const getAllDoctorsController = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    if (!doctors || doctors.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No doctors found" });
    }

    return res.status(200).json({
      success: true,
      data: doctors,
      message: "Doctors found successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch doctors" });
  }
};

const getDoctorProfileController = async (req, res) => {
  const doctorId = req.userId;
  try {
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    // Destructure the doctor document and exclude sensitive data
    const { password, ...rest } = doctor._doc;

    const appointments = await Booking.find({ doctor: doctorId });

    res.status(200).json({
      success: true,
      message: "Profile information retrieved successfully",
      data: { ...rest, appointments },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

module.exports = {
  updateDoctorController,
  deleteDoctorController,
  getSingleDoctorController,
  getAllDoctorsController,
  getDoctorProfileController,
};

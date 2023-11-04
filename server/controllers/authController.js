const User = require("../models/UserSchema");
const Doctor = require("../models/DoctorSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerController = async (req, res) => {
  const { name, email, password, role, photo, gender } = req.body;

  try {
    let existingUser = null;

    if (role === "patient") {
      existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "User already exists as a patient" });
      }
      const existingDoctor = await Doctor.findOne({ email });
      if (existingDoctor) {
        return res
          .status(400)
          .json({ message: "User already exists as a doctor" });
      }
    } else if (role === "doctor") {
      existingUser = await Doctor.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: "User already exists as a doctor" });
      }
      const existingPatient = await User.findOne({ email });
      if (existingPatient) {
        return res
          .status(400)
          .json({ message: "User already exists as a patient" });
      }
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let newUser;

    if (role === "patient") {
      newUser = new User({
        name,
        email,
        password: hashedPassword,
        photo,
        gender,
        role,
      });
    } else if (role === "doctor") {
      newUser = new Doctor({
        name,
        email,
        password: hashedPassword,
        photo,
        gender,
        role,
      });
    }

    await newUser.save();
    res.status(200).json({
      success: true,
      message: "User successfully created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again.",
    });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = await Doctor.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: process.env.JWT_EXPIRES,
      }
    );

    const { password: userPassword, role, appointments, ...rest } = user._doc;

    res.status(200).json({
      success: true,
      message: "Login successful",
      token: token,
      data: { ...rest, role },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again.",
    });
  }
};

module.exports = { loginController, registerController };

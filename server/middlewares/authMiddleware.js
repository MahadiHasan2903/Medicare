const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");
const Doctor = require("../models/DoctorSchema");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return res
      .status(403)
      .json({ success: false, message: "Token not provided" });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ success: false, message: "Token expired. Login again" });
    }
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

const restrictedUser = (roles) => async (req, res, next) => {
  try {
    const userId = req.userId;
    const user =
      (await User.findById(userId)) || (await Doctor.findById(userId));

    if (!user || !roles.includes(user.role)) {
      return res
        .status(401)
        .json({ success: false, message: "You are not authorized" });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again.",
    });
  }
};

module.exports = { restrictedUser, authMiddleware };

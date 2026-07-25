//auth , isStudent , isAdmin

const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
  try {
    //extract  token
    // Three way to pass token (body,cookie,header)

    console.log("cookies", req.cookies.token);
    console.log("body", req.body?.token);
    console.log("header", req.headers.authorization);
    const token =
      req.cookies.token ||
      req.body?.token ||
      req.header("Authorization").replace("Bearer ", "");

    if (!token || token == undefined) {
      return res.json({
        success: false,
        message: "Token Missing ",
      });
    }

    //varify this token
    try {
      // console.log(process.env.JWT_SECRET);
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);

      req.user = decode;
    } catch (error) {
      console.log(error);
      return res.json({
        success: false,
        message: "token is invalid",
      });
    }
    next();
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
};

exports.isStudent = (req, res, next) => {
  try {
    if (req.user.role !== "Student") {
      return res.json({
        success: false,
        message: "This is a protected route for student ",
      });
    }
    next();
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    if (req.user.role !== "Admin") {
      return res.json({
        success: false,
        message: "This is a protected route for admin ",
      });
    }
    next();
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
};

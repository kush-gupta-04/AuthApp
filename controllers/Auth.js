const bcrypt = require("bcrypt");

const User = require("../models/User");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    //check if a user is already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return;
      res.status(400).json({
        success: false,
        message: "User already exist ",
      });
    }

    //Secure password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error in hashing password",
      });
    }

    //Create entry for user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    return res.status(200).json({
      success: true,
      message: "User Created Successfully ",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      messsage: "User cann't Register Please try again later ",
    });
  }
};

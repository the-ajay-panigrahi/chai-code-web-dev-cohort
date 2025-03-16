import User from "../model/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  /*
      1) Get data
      2) Validate
      3) Check if user already exists
      4) Create a user in database
      5) Create a verification token
      6) Save token in database
      7) Send token as email to user
      8) Send success status to user
  */

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(404).json({
      message: "All fields are required! ",
    });
  }

  //email => @
  // password uppercase, lowercase, min 6 character

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const user = await User.create({
      name,
      email,
      password,
    });

    if (!user) {
      return res.status(400).json({
        message: "User not registered",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");
    user.verificationToken = token;
    await user.save();
    console.log("i am token in register", token);

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MAILTRAP_SENDER_EMAIL, // sender address
      to: user.email, // list of receivers
      subject: "Verify your email!", // Subject line
      text: `Please click on the following link ${process.env.BASE_URL}/api/v1/users/verify/${token}`, // plain text body
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    res.status(201).json({
      message: "User not registered",
      error,
      success: false,
    });
  }
};

const verifyUser = async (req, res) => {
  /*
     1) Get token from url
     2) Validate
     3) Find user based on that token
     4) If found then set isVerified field to true
     5) Remove verification token
     6) Save
     7) Return response
  */

  const { token } = req.params;
  console.log("i am token in verfiy", token);

  if (!token) {
    console.log("No token ", token);
    return res.status(400).json({
      message: "Invalid token",
    });
  }

  try {
    console.log("verification started");

    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({
      message: "User verified successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "User not verified",
      error,
      success: false,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!email) {
      res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bycrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },

      "shhhhh",
      {
        expiresIn: "24h",
      }
    );
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };
    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.log("Login Error", error);
  }
};

export { registerUser, verifyUser, login };

const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { UserDTO } = require("../config/Dto");
const jwt = require("jsonwebtoken");
const { generateOTP, generateOTPSecret, verifyOtp } = require("../config/otp");
const { sendMail } = require("../config/transporter");
const Followers = require("../models/Followers");

const Create_User = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .send({ error: "username , email and password  fields are required" });
  }

  try {
    const doesUserWithEmail = await User.find({ email });

    if (doesUserWithEmail.length) {
      console.log(doesUserWithEmail);
      return res.status(400).send({ data: null, error: "email is  taken" });
    }

    const doesUserWithname = await User.find({ username });

    if (doesUserWithname.length) {
      console.log(doesUserWithname);
      return res.status(400).send({ data: null, error: "user name is taken" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const new_user = await User.create({
      username,
      email,
      password: hashPassword,
    });

    if (new_user) {
      // const data = UserDTO(new_user);
      console.log(new_user);
      return res
        .status(201)
        .send({ data: UserDTO(new_user.toJSON()), error: null });
    }
  } catch (error) {
    res.status(500).send({ error: error.message, data: null });
  }
});

//LOGIN IN USER TO PORTBACK

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email.length || !password.length) {
    return res
      .status(400)
      .send({ data: null, error: "Email and password fields are required" });
  }
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .send({ data: null, error: "No user with the email " + email });
    }

    const isPassword = bcrypt.compareSync(password, user.password);

    if (!isPassword) {
      return res.status(401).send({ data: null, error: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: user._id }, "password");

    return res
      .status(200)
      .send({ data: UserDTO({ ...user?.toJSON(), token }), error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
});

const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send({ data: null, error: "Email is Required" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .send({ data: null, error: `No user with email ${email}` });
    }

    const otpSecret = generateOTPSecret();
    const otpExpires = new Date(Date.now() + 5 * 60 * 1000);

    user.otpKey = otpSecret.base32;
    user.otpExpires = otpExpires;

    await user.save();

    const otp = generateOTP(otpSecret);

    const data = await sendMail(
      email,
      "Portback Password Reset",
      `Your otp pin for pasword reset  is ${otp}`
    );

    if (data?.error) {
      return res.status(400).send({ data: null, error: data.error });
    }

    return res
      .status(200)
      .send({ data: "Otp sent to your email", error: null });
  } catch (error) {
    res.status(500).send({ data: null, error: error.message });
  }
});

const resetPassword = asyncHandler(async (req, res) => {
  const { otp, email, password } = req.body;

  if (!otp || !email || !password) {
    return res
      .status(400)
      .send({ data: null, error: "otp , email and password are required " });
  }

  try {
    const user = await User.findOne({ email });

    if (!user || !verifyOtp(user.otpKey, otp)) {
      console.log(otp);
      return res
        .status(401)
        .send({ data: null, error: "Invalid or expired token" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    user.password = hashPassword;
    user.otpKey = null;
    user.otpExpires = null;
    await user.save();

    return res
      .status(200)
      .send({ data: "password reset successfully ", error: null });
  } catch (error) {
    return res.status(500).send({ data: null, error: error.message });
  }
});
const newFollower = asyncHandler(async (req, res) => {
  Followers.create({user_id: req.body.user_id, username: req.body.username})
      .then((data)=>{
        res.status(200).json({message: 'New Follower!'})
      }).catch((err)=>{
        console.log(err);
        res.status(500).json({ data: null, error: err.message })
      })
});
const yes = (9);

module.exports = { Create_User, loginUser, forgotPassword, resetPassword, newFollower };

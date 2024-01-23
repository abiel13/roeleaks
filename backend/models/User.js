const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    otpKey: {
      type: String,
      default: null,
    },
    otpExpires: {
      type: Date,
    },
    leaks: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Leaks",
    },
    pinnedLeaks: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Leaks",
    },
    likedLeaks: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Leaks",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", userModel);

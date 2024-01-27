const mongoose = require("mongoose");

const followersModel = mongoose.Schema(
  {
    user_id: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        ref: "User"
    },
    username: {
      required: true,
      type: String,
      unique: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.models.Followers || mongoose.model("Followers", followersModel);

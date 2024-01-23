const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
    unique: true,
  },
});

module.exports = mongoose.models.Likes || mongoose.model("Likes", likeSchema);

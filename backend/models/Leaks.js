const mongoose = require("mongoose");

const leakSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  comments: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Comment",
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Likes",
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = mongoose.model.Leaks || mongoose.model("Leaks", leakSchema);

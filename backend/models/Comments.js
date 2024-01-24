const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Likes",
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

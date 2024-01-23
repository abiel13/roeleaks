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
    type: String,
  },
  likes: {
    type: Number,
  },
});

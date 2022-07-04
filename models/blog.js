const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogschema = new Schema(
  {
    title: String,
    body: {
      type: String,
      min: 5,
    },
    likes: {
      type: Array,
      default: [],
    },
    dislikes: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", blogschema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentschema = new Schema({
  comment: String,

  rated: {
    type: Array,
    default: [],
  },
  blogId: {
    type: String,
  },
});

module.exports = mongoose.model("Comment", commentschema);

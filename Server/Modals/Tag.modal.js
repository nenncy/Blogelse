const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tagsSchema = new Schema(
  {
    tagname: { type: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Tag = mongoose.model("Tag", tagsSchema);
module.exports = Tag;

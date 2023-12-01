const mongoose = require("mongoose");
const { Schema } = mongoose;
const userinfo = require("./userinfo");

const cartSchema = new Schema({
  item: { type: Object, required: true },
  userid: { type: Schema.Types.ObjectId, ref: "userinfo", required: true },
});

const learningSchema = new Schema({
  des: String,
  id: Number,
  img: String,
  price: Number,
  rating: String,
  title: String,
  type: String,
  writer: String,
});
const LearningData=mongoose.model("LearningData",learningSchema)
const Cart = mongoose.model("Cart", cartSchema);

module.exports={LearningData,Cart}

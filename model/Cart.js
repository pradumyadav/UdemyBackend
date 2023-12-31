const mongoose = require("mongoose");
const { Schema } = mongoose;
const userinfo = require("./userinfo");

const cartSchema = new Schema({

       id:Number,
        title:String,
        des:String,
        img:String,
        writer:String,
        rating:String,
        price:Number,
        type:String
      
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

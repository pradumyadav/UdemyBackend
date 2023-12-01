const { Cart } = require("../model/Cart");

exports.fetchCartByUser = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const cartItems = await Cart.find({ userid: req.body.userId })
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(400).json(err);
  }
};

exports.addToCart = async (req, res) => {
//   const {id } = req.user;
  console.log("req.body", req.body);
  const cart = new Cart({...req.body});
  try {
    const doc = await cart.save();
    res.status(201).json(doc);
  } catch (err) {
    // Handle errors here
    res.status(400).json(err);
  }
};

exports.deleteFromCart = async (req, res) => {

    const {id} = req.params;
    try {
      const doc = await Cart.findByIdAndDelete(id);
      res.status(200).json(doc);
    } catch (err) {
      // Handle errors here
      res.status(400).json(err);
    }
  };


  exports.Learning3=async(req,res)=>{
           
    const cardDelete= await Cart.deleteMany({})
    res.send(cardDelete)
}

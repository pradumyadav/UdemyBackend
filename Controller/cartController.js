const { Cart, LearningData } = require("../model/Cart");



exports.addToCart =async(req,res)=>{
   const data= req.body; 
    const addData= await Cart.create(data)
    res.send(addData)

  

}

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

  exports.postLearning=async (req,res)=>{
    const data= req.body;
    const learnPost = await LearningData.create(data)
    res.send(learnPost)
  }
  exports.getLearning=async (req,res)=>{
   
    const learnget = await LearningData.find({})
    res.send(learnget)
  }

  exports.remove=async (req,res)=>{
    const data=req.body
    console.log(data)
    const remove=await Cart.findOneAndDelete({id:data.id})
    res.send(remove)
  }

  exports.cartFind=async(req,res)=>{
           
    const LearnData= await Cart.find({})
    res.send(LearnData)

}
  exports.Learning3=async(req,res)=>{
           
    const cardDelete= await Cart.deleteMany({})
    res.send(cardDelete)
}

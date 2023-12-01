


const {LearningData}= require("../model/Cart")

        const Learning1=async(req,res)=>{
            const body=req.body
            const LearnData= await LearningData.create(body)
            res.send(LearnData)
        }
        const Learning2=async(req,res)=>{
           
            const LearnData= await LearningData.find({})
            res.send(LearnData)
        }
       
        module.exports={Learning1,Learning2} ;


const url="mongodb+srv://pradumyadav020:pradum431@cluster0.zs5uiki.mongodb.net/UdemyBase?retryWrites=true&w=majority"


const mongo = require("mongoose")


async function connection (){
        try{
            await mongo.connect(url)
            console.log("Connection made Sucessfully")
        }
        catch(err){
            console.log(err)
        }
}

module.exports=connection
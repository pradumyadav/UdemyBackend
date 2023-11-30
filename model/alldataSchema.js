



const mongo =require("mongoose")

const allDataSchema =mongo.Schema({
    
        id:Number,
        title:String,
        des:String,
        img:String,
        writer:String,
        rating:String,
        price:Number,
        type:String

})

const allDataStoreSchema =mongo.model("allDataStore",allDataSchema)

 module.exports={allDataStoreSchema}





        const express= require("express")

        const app =express()
        const cors =require("cors")
const routerforAll = require("./routes/router")


        app.use(express.json())
        app.use(cors({
            origine:"*"
        }))

        app.use("/api/",routerforAll)
        app.listen(4005,()=>{
            try{
                console.log("We are on 4005")
            }
            catch(err){
                console.log(err)
            }
        })
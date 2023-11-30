


        const express= require("express")

        const app =express()
        const cors =require("cors")
        const routerforAll = require("./routes/router")
const connection = require("./Config/config")

    
        app.use(express.json())
        app.use(cors({
            origin:"*"
        }))

        app.use("/api/",routerforAll)
        app.listen(4005,async()=>{
            try{
                await connection()
                console.log("We are on 4005")
            }
            catch(err){
                console.log(err)
            }
        })
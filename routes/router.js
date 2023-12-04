


const { mysearch } = require("../Allcallbacks/allcallbacks")
const { postalldata,getalldata } = require("../Allcallbacks/allcallbacks")
const { Learning3, postLearning, getLearning, remove } = require("../Controller/cartController")



const routerforAll =require("express").Router()

routerforAll.post("/postdata",postalldata)

routerforAll.get("/getdata",getalldata)

routerforAll.post("/postlearn",postLearning)
routerforAll.get("/getlearn",getLearning)
routerforAll.post("/remove",remove)
routerforAll.delete("/delete",Learning3)
routerforAll.get("/search",mysearch)


module.exports =routerforAll
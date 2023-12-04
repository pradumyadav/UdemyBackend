


const { postalldata,getalldata } = require("../Allcallbacks/allcallbacks")
const { Learning3, postLearning, getLearning, remove } = require("../Controller/cartController")
//const { Learning1, Learning2 } = require("../Controller/learningController")


const routerforAll =require("express").Router()

routerforAll.post("/postdata",postalldata)

routerforAll.get("/getdata",getalldata)

routerforAll.post("/postlearn",postLearning)
routerforAll.get("/getlearn",getLearning)
routerforAll.post("/remove",remove)
routerforAll.delete("/delete",Learning3)


module.exports =routerforAll
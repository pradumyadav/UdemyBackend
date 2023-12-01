


const { postalldata,getalldata } = require("../Allcallbacks/allcallbacks")
const { Learning3 } = require("../Controller/cartController")
const { Learning1, Learning2 } = require("../Controller/learningController")


const routerforAll =require("express").Router()

routerforAll.post("/postdata",postalldata)

routerforAll.get("/getdata",getalldata)

routerforAll.post("/postlearn",Learning1)
routerforAll.get("/getlearn",Learning2)
routerforAll.delete("/delete",Learning3)


module.exports =routerforAll
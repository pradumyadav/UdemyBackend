


const { postalldata,getalldata } = require("../Allcallbacks/allcallbacks")


const routerforAll =require("express").Router()

routerforAll.post("/postdata",postalldata)

routerforAll.get("/getdata",getalldata)

module.exports =routerforAll
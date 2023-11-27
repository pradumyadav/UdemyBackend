const { getalldata } = require("../Allcallbacks/allcallbacks")
const { postalldata } = require("../Allcallbacks/allcallbacks")


const routerforAll =require("express").Router()

routerforAll.get("/postdata",postalldata)

routerforAll.get("/getdata",getalldata)

module.exports =routerforAll
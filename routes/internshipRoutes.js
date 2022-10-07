const express = require("express")
const {createInternship, updateInternship, deleteInternship,getInternship,getStaticInternship} = require("../controller/internController")

const route = express.Router()

route.get('/',getInternship)
route.get('/:id',getStaticInternship)
route.post("/create",createInternship)
route.post("/update/:id",updateInternship)
route.post("/delete/:id",deleteInternship)

module.exports = route


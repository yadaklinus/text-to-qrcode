const express = require("express")
const app = express()
const PORT = 1234

app.set("view engine","ejs")

app.use('/css', express.static('node_modules/bootstrap/dist/css'))

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(PORT,()=>{
    console.log("running");
})
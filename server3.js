const express = require("express")
const app = express()

app.listen((3000), ()=>{

})


app.get("/", (req,res)=>{
    console.log(req.params.nome)
    res.send("Olá"+req.params.nome)
})
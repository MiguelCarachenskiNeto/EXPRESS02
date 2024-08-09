const express = require("express")
const server2 = express()

const morgan = require("morgan")

server2.listen(3000)

server2.use(morgan("Metodo= :method | URL= :url | Status= :status"))


server2.get("/", (req,res)=>{
    res.send("teste de contenção")
})


server2.listen(3002)
const express = require ("express");
const app = express();

app.listen(3000,()=>{
    console.log("servidor no ar");
})

const funcoes = require("./functions")

app.get("/",(req,res)=>{
    res.send("teste com arquivos externos");
})

app.get("/add/:a/:b",(req,res)=>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    const resultado = funcoes.add(a,b);

    res.send(`A soma entre ${a} e ${b} é ${resultado}`)
})

app.get("/sub/:a/:b",(req,res)=>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    const resultado = funcoes.sub(a,b);

    res.send(`A subtração entre ${a} e ${b} é ${resultado}`)
})

app.get("/mult/:a/:b",(req,res)=>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    const resultado = funcoes.mult(a,b);

    res.send(`A multiplicação entre ${a} e ${b} é ${resultado}`)
})

app.get("/div/:a/:b",(req,res)=>{
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    const resultado = funcoes.div(a,b);

    res.send(`A divisão de ${a} por ${b} é ${resultado}`)
})
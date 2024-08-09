const express = require ("express");
const app = express();

app.listen(3000,() => {
    console.log("Servidor no ar");
})

const clientes = [
    {id:1, nome:"Altamiro", telefone:"111111111", email:"alta@gmail.com"},
    {id:2, nome:"Baltamiro", telefone:"222222222", email:"balta@gmail.com"},
    {id:3, nome:"Caltamiro", telefone:"333333333", email:"calta@gmail.com"},
    {id:4, nome:"Daltamiro", telefone:"444444444", email:"dalta@gmail.com"},
    {id:5, nome:"Eltamiro", telefone:"555555555", email:"elta@gmail.com"}
]

app.get("/",(req,res)=>{
    res.send("API de clientes");
})

app.get("/total_clientes",(req,res)=>{
    res.send("total de clientes: " + clientes.length);
})

app.get("/clientes/:id", (req,res)=>{
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));
    if(!cliente) res.status(404).send("Cliente não encontrado");
    res.send(`O cliente é: ${cliente.nome}, telefone do cidadão: ${cliente.telefone}, email do cidadão ${cliente.email}`);
})
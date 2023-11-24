//parte01

const express = require('express') //impotando o express
const app = express() //iniciando o express

app.listen(3000,function(erro){
    if(erro){
        console.log("Deu hugo")
    }else{
        console.log("Deu sid")
    }
})

//parte02 - Rotas
app.get('/',function(req,res){
    res.send("deu sid")
})

app.get('/sobremim',function(req,res){
    res.send('sobre mim')
})

app.get('/contato',function(req,res){
    res.send('contato')
})

app.get('/galeria',function(req,res){
    res.send('galeria')
})

//rota com parâmetro
app.get('/seunome/:nome',function(req,res){
    var nome = req.params.nome
    res.send('Olá '+nome)
})
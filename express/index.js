const express = require("express");  // Importando Express
const app = express(); // Iniciando o express


app.get("/",function(req,res){
    res.send("Bem vindo ao guia do programador!");
});

//Parametros não obrigátorios
app.get("/blog/:artigo?",function(req,res){

    var artigo = req.params.artigo;

    if(artigo){
        res.send(`<h1>Artigo: ${artigo}</h1>`)
    }else{
        res.send("<h1>Bem ao meu Blog!<h1>");
    }
});

// Query Pamams
app.get("/canal/youtube",function(req,res){

    var canal = req.query["canal"];

    if(canal){
        res.send(canal);
    }else{
        res.send("Nenhum canal forneceido")
    }
});

// Parametros obrigátorio
app.get("/ola/:nome/:empresa",function(req,res){
    // req ou requisicao  => DADOS ENVIADOS PELO USUÁRIO
    // res ou resposta    => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO 
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send(`<h1>Olá,${nome} do ${empresa} ?</h1>`);
})


app.listen(3000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
});
const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const consign = require('consign');
const pedidos = require('./models/pedidos');


module.exports = () => {    
    const app = express();
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))
    consign()
        .include('controllers')
        .into(app)
    return app;
}
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.set("view engine" , "ejs");

app.get("/" , function(req, res) {
    res.render("pages/index");
})

app.get("/entrega" , function(req, res) {
    res.render("pages/entrega");
})

app.get("/cardapio" , function(req, res) {
    res.render("pages/cardapio");
})

app.get("/about" , function(req, res) {
    res.render("pages/about");
})

app.get("/avaliation" , function(req, res) {
    res.render("pages/avaliation");
})

app.get("/embalagens" , function(req, res) {
    res.render("pages/embalagens");
})
app.get("/moreabout" , function(req, res) {
    res.render("pages/moreabout");
})

app.get("/presentes" , function(req, res) {
    res.render("pages/presentes");
})

app.get("/receita" , function(req, res) {
    res.render("pages/receita");
})


app.post("/request", function(req, res){
//res.send("Nome: " + req.body.name + "<br>Email: " + req.body.email + "<br>Pedido: " + req.body.pedido)
    pedidos.create({
        nome: req.body.name,
        email: req.body.email,
        pedido: req.body.pedido
    }). then (function(){
        res.get("/entrega")
    }).catch(function(erro){
        res.send ("Pedido não foi enviado <br>" + erro)
    })
})



app.listen(8080);

console.log("Rodando...");
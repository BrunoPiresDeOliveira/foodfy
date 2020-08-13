const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require('./data')

const server = express()

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get ("/", function (req, res) { 
    return res.render('index', {items: recipes})
})

server.get ("/sobre", function (req, res) { 
    return res.render('about')
})

server.get ("/receitas", function (req, res) { 
    return res.render('recipes', {items: recipes})
})

server.get("/receitas/:index", function (req, res) {
    const recipeIndex = req.params.index;

    if (!recipes[recipeIndex]) {
        return res.status(404).render("not-found")
    }

    return res.render("recipe", {item: recipes[recipeIndex]})
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});


server.listen(5000, function() {
    console.log("server is running")
})

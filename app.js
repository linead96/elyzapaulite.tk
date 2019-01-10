var express             = require("express"),
    bodyParser          = require("body-parser"),
    methodOverride      = require("method-override"),
    dotEnv              = require("dotenv").config();
    
var app = express();

app.use(bodyParser.urlencoded({extended:true, limit: '50mb'}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));

app.get("/", function(req,res){
   res.render("index"); 
});

app.get("/home", function(req,res){
   res.render("home"); 
});

app.get("/about", function(req,res){
   res.render("about"); 
});

app.get("/portfolio-webdesign", function(req,res){
   res.render("portfolio-webdesign"); 
});

app.get("/portfolio-banner", function(req,res){
   res.render("portfolio-banner"); 
});

app.get("/portfolio-logo", function(req,res){
   res.render("portfolio-logo"); 
});

app.get("/portfolio-art", function(req,res){
   res.render("portfolio-art"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started"); 
});
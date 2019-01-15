var express             = require("express"),
    bodyParser          = require("body-parser"),
    methodOverride      = require("method-override"),
    dotEnv              = require("dotenv").config();
    
var app = express();

app.use(bodyParser.urlencoded({extended:true, limit: '50mb'}));
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));

app.get("/home", function(req,res){
   console.log(req.body);
   res.render("home"); 
});

app.get("/about", function(req,res){
   res.render("about"); 
});

app.get("/portfolio", function(req,res){
   res.render("portfolio"); 
});

app.get("/*", function(req,res){
   console.log(req.body);
   res.render("index"); 
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started"); 
});
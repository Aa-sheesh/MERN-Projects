const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1/wikiDB", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
const articleSchema = {
    title: String,
    content: String
};
const article = mongoose.model("article", articleSchema);
const Aashish = new article ({
    title: "Aashish",
    content: "Aashish is a cool guy."
    });
Aashish.save();

app.get("/articles", function (req, res) {
    article.find({},function(err,foundArticles){
        if(!err){
            res.send(foundArticles);
        }else{
            res.send(err);
        }
    });
});

app.post("/articles",function(req,res){
        const newArticle = new article({
            title:req.body.title,
            content:req.body.content
        });
        newArticle.save(function(err){
            if(err){
                res.send(err);
            }else{
                res.send("Succesfully added a new article.");
            }
        });
});
app.delete("/articles",function(req,res){
    article.deleteMany(function(err){
        if(!err){
            res.send("Succesfully deleted all articles.");
        }else{
            res.send(err);
        }
    });
});

app.listen(3000,function(){
    console.log("Server is up and running at port 3000");
})
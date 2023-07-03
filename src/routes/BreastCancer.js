const express = require('express');
const router = express.Router();

const Article = require('../models/Article');

router.get("/articles",async function(req,res){
    var articles =await Article.find();

    res.json({
        statusCode:res.statusCode,
        articles});
    });

    // router.post("/list/:location",async function(req,res){
    //     var doctors =await Doctor.find({location:req.params.location});
    //     res.json(doctors);
    //     });



    //     router.post("/articleadd",async function(req,res){
    //     await Article.deleteOne({id:req.body.articleId});

    // var newArticle= new Article({
    //     articleId:req.body.articleId,
    //     articleTitle :req.body.articleTitle,
    //     articleDescription:{
    //         'en':req.body.articleDescription1,
    //         'bn':req.body.articleDescription2,
    //     },
    //     articleImage:req.body.articleImage,


    // });

    // await newArticle.save();

    // const response = {message:"New Article Added!" + `id: ${req.body.id}`};

    // res.json(response);


    // });

    // router.post("/delete",async function(req,res){
    //     await Doctor.deleteOne({id:req.body.id});
        
    //         const response = {message:"Doctor Deleted!" + `id: ${req.body.id}`};
        
    //         res.json(response);
        
        
    //         });

module.exports = router;
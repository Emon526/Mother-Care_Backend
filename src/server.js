const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const Doctor = require('./models/Doctor');
const Article =require('./models/Article');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
//true -> Nested Objects Correct
//faslse -> Nested Objects Not Correct
app.use(bodyParser.json());
const mongoDbPath = "mongodb+srv://emon:Abc123456@mother-care-cluster.7sfpdxw.mongodb.net/mothercaredatabase";

mongoose.connect(mongoDbPath).then(function(){

    app.get("/",function(req,res){
        const response = {
            statusCode:res.statusCode,
            message:"Api Working",};
            console.log(res.statusCode,res.message),
        res.json(response);

    });

    const doctorRouter = require('./routes/Doctor');
    app.use("/doctors",doctorRouter);

    const breastCancerRouter = require('./routes/BreastCancer');
    app.use("/breastcancer",breastCancerRouter);
    
    app.use((req, res, next) => {
        const error = new Error('Page Not found');
        error.status = 404;
        next(error);
      });

      app.use((error, req, res, next) => {
        console.log(error.status,error.message)
        res.status(error.status || 500);
        res.json({
            statusCode:error.status,
            message:  error.message,
        });
      });
});



//Strating the server on a port 
const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || "127.0.0.1";
app.listen(PORT,HOST,function(){ 
    console.log("Server Started at port: "+"http://" + HOST + ":" + PORT );
});
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Doctor');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
//true -> Nested Objects Correct
//faslse -> Nested Objects Not Correct
app.use(bodyParser.json());
const mongoDbPath = "mongodb+srv://emon:Abc123456@mother-care-cluster.7sfpdxw.mongodb.net/mothercaredatabase";

mongoose.connect(mongoDbPath).then(function(){

    app.get("/",function(req,res){
        const response = {
            code:res.statusCode,
            message:"Api Worked!"};
        res.status(200).json(response);

    });

    const noteRouter = require('./routes/Doctor');
    app.use("/doctors",noteRouter);

    app.use((req, res, next) => {
        const error = new Error('Not found');
        error.status = 404;
        next(error);
      });

      app.use((error, req, res, next) => {
        console.log(error.status)
        res.status(error.status || 500);
        res.json({
          error: {
            message: error.message,
            code: error.status
          }
        });
      });
});



//Strating the server on a port 
const PORT = process.env.PORT || 9000;
app.listen(PORT,function(){
    console.log("Server Started at port: " + PORT);
});
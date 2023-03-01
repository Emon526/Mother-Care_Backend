const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Doctor');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
//true -> Nested Objects Correct
//faslse -> Nested Objects Not Correct
app.use(bodyParser.json());
const mongoDbPath = "mongodb+srv://emon:Abc123456@doctors.61aops6.mongodb.net/doctorsdb";

mongoose.connect(mongoDbPath).then(function(){

    app.get("/",function(req,res){

    const response = {message:"Api Worked!"};
    res.json(response);
    });

    const noteRouter = require('./routes/Doctor');
    app.use("/doctors",noteRouter)


});



//Strating the server on a port 
const PORT = process.env.PORT || 9000;
app.listen(PORT,function(){
    console.log("Server Started at port: " + PORT);
});
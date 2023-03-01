const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
id:{
    type: String,
    unique:true,
    required:true
},
doctorname:{
    type: String,
    required:true
},
degree:{
    type: String,
    required:true
},
speciality:{
    type: String,
    required:true
},
workplace:{
    type: String,
    required:true
},
biography:{
    type: String,
    required:true
},
patient:{
    type: String,
    required:true
},
experience:{
    type: String,
    required:true
},
review:{
    type: String,
    required:true
},
image:{
    type: String,
    required:true
},
appointmentNumber:{
    type: String,
    required:true
},
location:{
    type: String,
    required:true
},
});
module.exports =  mongoose.model("Doctor",noteSchema);
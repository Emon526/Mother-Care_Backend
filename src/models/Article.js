const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({

articleId:{
    type: String,
    unique:true,
    required:true
},
articleTitle:{
    type: String,
    required:true
},
articleDescription:{
    type: String,
    required:true
},
articleImage:{
    type: String,
    required:true
},

});
module.exports =  mongoose.model("Article",articleSchema);
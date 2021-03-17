const mongoose= require('mongoose');

//creating the scheme
const todoSchema= new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category:{
        
        type: String,
        required: true
    },
    date:{
        type:Date,
        required:true,
       
    }
});

//const todo = mongoose.model('Contact',contactSchema);
const todo = mongoose.model('todo',todoSchema);
module.exports=todo;

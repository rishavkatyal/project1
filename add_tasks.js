const todo = require('../models/todo');
const db = require('../config/mongoose');
module.exports.create = function(req, res){

    console.log(req.body);
    todo.create({
        description: req.body.description,
        
        category: req.body.category,
        date: req.body.date
    }, function(err,newTask){
        if(err){
            console.log("error in creating a contact");
            return;
        }
            
        console.log('******',newTask);
        return res.redirect('/');
    });
}

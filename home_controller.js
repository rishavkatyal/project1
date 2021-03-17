const todo = require('../models/todo');
const db = require('../config/mongoose');

module.exports.home=function(req,res){
    todo.find({},function(err,todos){
        if(err)
        {
            console.log('error in fetching contacts');
            return;
        }
    return res.render('home',{
        title:"Todo App",
        //contact_list: todo_list
        todo_list: todos
        });
    });
       

}
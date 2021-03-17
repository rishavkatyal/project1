const todo = require('../models/todo');
module.exports.profile=function(req,res)
{
    let id=req.query.id;
    todo.findByIdAndDelete(id,function(err){
        if(err)
        {
            return;
        }
        return res.redirect('/');
    })

};
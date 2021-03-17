const todo = require('../models/todo');
const db = require('../config/mongoose');

const express=require('express');
const router=express.Router();
const homeController =require('../controllers/home_controller');
const xyz =require('../controllers/add_tasks');
const del =require('../controllers/delete');
//router.get('/',homeController.home);



router.get('/',homeController.home);
router.post('/addtask',xyz.create);
router.get('/delete-todo',del.profile);
//router.use('/deletetask',require('./posts'));
console.log('router loaded');
module.exports=router;
const express=require('express');
const router=express.Router();
const postsController=require('../controllers/add_tasks');
router.get('/posts',postsController.posts);
console.log('router loaded');
module.exports=router;
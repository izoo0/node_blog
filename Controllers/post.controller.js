const { response } = require('../app');
const models = require('../models');

function newPost(req,res){
    const post = {
        title : req.body.title,
        content : req.body.content,
        imageUrl : req.body.image_url,
        categoryId : req.body.category_id,
        userId : 1
    }
    models.Post.create(post).then(result=>{
     res.status(201).json({
        message: "Post created successfully",
        post:result
     })
    }).catch(error =>{
        res.status(500).json({
            message: "Something went wrong",
            error:error
         })
    });
}

function singlePost(req,res){
   const id = req.params.id;
   models.Post.findByPk(id).then(result =>{
       if(!result){
        return res.status(404).json({
            message: "Post is not available"
        })
       }
       return res.status(200).json(result)
  
   }).catch(error =>{
    res.status(500).json({
        message : "Something went wrong",
        error:error,
    })
   }
    
   )
}

function allPost(req,res){
    models.Post.findAll().then(result =>{
       res.status(200).json(result)
    }).catch(error=>{
        res.status(500).json({
        message: "Something went wrong",
        error:error
        })
    })
}

module.exports = {
    newPost : newPost,
    singlePost : singlePost,
    allPost : allPost
}
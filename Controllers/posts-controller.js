const fs =require('fs');

const getPosts=(req,res)=>{
    const posts=require('../postsList.json')
    res.send({posts})
}
const getById=(req,res)=>{
const posts=require('../postsList.json')
const postsById=posts.find(post=>post.id==parseInt(req.params.id))
if(postsById)return res.send({postsById});
res.status(404).send({message:"post not found"})
}

const AddPost=(req,res)=>{
    const post=req.body.post;
    fs.appendFile('../postsList.json',JSON.stringify(post),(err)=>{})
    res.send();
}

const updateMovie=(req,res)=>{
    const posts=require('../postsList.json')
    const post=posts.find(post=>post.id === arseInt(req.params.id))
    posts[posts.indexOf(post)]=req.body.post;
    fs.writeFile("../postsList.json",JSON.stringify(post),(err)=>{})
    res.send();
}

const deletePost=(req,res)=>{
    const posts=require('../postsList.json')
    res.send(posts.filter(post=>post.id!=req.params.id))
    fs.writeFile("../postsList.json",JSON.stringify(posts.filter(post=>post.id!=req.params.id)),(err)=>{})
}


module.exports={getPosts,getById,AddPost,updateMovie,deletePost}
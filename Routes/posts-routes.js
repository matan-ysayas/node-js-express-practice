const postsRouter=require('express').Router();
const postsController=require('../Controllers/posts-controller')

postsRouter.get('/',postsController.getPosts)

postsRouter.get('/:id',postsController.getById)

postsRouter.post('/',postsController.AddPost)

postsRouter.put('/:id',postsController.updateMovie)

postsRouter.delete('/:id',postsController.deletePost)

module.exports=postsRouter;
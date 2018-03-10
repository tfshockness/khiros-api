var express = require('express');
var router = express.Router();
//var Post = require('../models/post.model');
const postServices = require('../services/post.services');

/**
 * Get All Posts
 */

 //TODO Implement Pagination
router.get('/', (req, res) => {
    const posts = postServices.getAllPost();
    
    posts.then( allPost => res.status(200).send(allPost))
         .catch(error => res.status(400).send({error: error}))
});

/**
 * Add a New Post
 */
router.post('/', (req, res) => {
    let post;
    try {
        post = postServices.addPost(req.body);
        res.status(301).redirect(`/posts/${post._id}`);
    } catch (err) {
        return res.status(403).send({ error: "err" });
    }
});


/**
 * Get Post by Id
 */
router.get('/:id', (req, res) => {
    const post = postServices.getPostById(req.params.id);
    post.then( singlePost => {
        singlePost ? 
        res.status(200).send(singlePost) : 
        res.status(404).send({ error: `Post with id: ${req.params.id} was Not Found.`});
    
    })
        .catch( error => res.status(400).send({error: "The Id sent is not valid or incorrect."}));
});

/**
 * Update a post by Id
 * I dont know if should be put or patch. Or whatever
 */
router.put('/:id', (req, res) => {
    //TODO - implemente Put 
});

/**
 * Delete a post by Id
 */
router.delete('/:id', (req, res) => {

});

module.exports = router;
var express = require('express');
var router = express.Router();
const postServices = require('../services/post.services');
const PostListViewModel = require('../viewModels/PostListViewModel');
const Pagination = require('../util/Pagination');
/**
 * Get All Posts
 */

 //TODO Implement Pagination
router.get('/', async (req, res) => {
    try {

        const pagination = Pagination.getPagination(req.query.page, req.query.size);

        const posts = await postServices.getAllPost(pagination.page, pagination.size);

        res.status(200).send(new PostListViewModel(posts, pagination.page, pagination.size));

    } catch (error) {

        res.status(400).send({error: error.message})
    }     
});

/**
 * Add a New Post
 */
router.post('/', async (req, res) => {
    let post;
    try {
        post = await postServices.addPost(req.body);
        res.status(301).redirect(`/posts/${post._id}`);
    } catch (err) {
        return res.status(403).send({ error: err || err.message });
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
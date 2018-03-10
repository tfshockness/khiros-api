var Post = require('../models/post.model');

class PostRepository{

    add({ title, subtitle, category, text, image, status, publishedAt }) {
        let newPost = new Post(
            {
                title,
                subtitle,
                category,
                text,
                image,
                status,
                publishedAt
            });

        newPost.save(err => {
            if (err) throw err;
        });
        return newPost;
    }

    getAll() {
        return Post.find();
    }

    getById(id){
        return Post.findById(id);
    }
}
module.exports = new PostRepository();
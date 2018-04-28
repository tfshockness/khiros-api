var Post = require('../models/post.model');

class PostRepository{

    async add({ title, subtitle, category, text, image, status, publishedAt }) {
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

        const res = await newPost.save(err => {
            if (err) throw err;
        });
        return res;
    }

    getAll() {
        return Post.find();
    }

    getById(id){
        return Post.findById(id);
    }
}
module.exports = new PostRepository();
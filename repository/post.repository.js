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

        return newPost.save();

    }

    getAll(pageNumber, pageSize) {
        return Post.find()
                    .skip( (pageNumber - 1) * pageSize)
                    .limit(pageSize);
    }

    getById(id){
        return Post.findById(id);
    }
}
module.exports = new PostRepository();
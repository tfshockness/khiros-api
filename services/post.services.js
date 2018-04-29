var postRepository = require('../repository/post.repository');
const { PAGE, SIZE } = require('../config/constants');


class PostServices{
    addPost({ title, subtitle, category, text, image, status = 'Rascunho', publishedAt = Date.now() }){

        return postRepository.add({title, subtitle, category, text, image, status, publishedAt});

    }

    getAllPost(pageNumber = PAGE , pageSize = SIZE){
        return postRepository.getAll(pageNumber, pageSize);
     }

     getPostById(id){
        return postRepository.getById(id);
    }
}

module.exports = new PostServices();
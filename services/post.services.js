var postRepository = require('../repository/post.repository');


class PostServices{
    addPost({ title, subtitle, category, text, image, status = 'Rascunho', publishedAt = Date.now() }){

        return postRepository.add({title, subtitle, category, text, image, status, publishedAt});

    }

    getAllPost(){
        return postRepository.getAll();
     }

     getPostById(id){
        return postRepository.getById(id);
    }
}

module.exports = new PostServices();
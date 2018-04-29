var postRepository = require('../repository/post.repository');


class PostServices{
    addPost({ title, subtitle, category, text, image, status = 'Rascunho', publishedAt = Date.now() }){

        return postRepository.add({title, subtitle, category, text, image, status, publishedAt});

    }

    /**
     * 
     * @param {Number} pageNumber Current Page
     * @param {Number} PageSize  Size of records for the current Page
     */
    getAllPost(pageNumber , pageSize){
        return postRepository.getAll(pageNumber, pageSize);
     }

     getPostById(id){
        return postRepository.getById(id);
    }
}

module.exports = new PostServices();
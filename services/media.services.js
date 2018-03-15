var mediaRepository = require('../repository/media.repository');

class MediaServices{

    addMedia({title, url, cover, isActive}){
        return mediaRepository.add({title, url, cover, isActive});
    }

    getAllMedia(){
        return mediaRepository.getAll();
    }

    getMediaById(id){
        return mediaRepository.getById(id)
    }
}

module.exports = new MediaServices();
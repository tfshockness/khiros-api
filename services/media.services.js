var mediaRepository = require('../repository/media.repository');

class MediaServices{

    addMedia({title, url, cover, isActive}){
        return mediaRepository.add({title, url, cover, isActive});
    }

    /**
     * 
     * @param {Number} pageNumber Current Page
     * @param {Number} PageSize  Size of records for the current Page
     */
    getAllMedia(pageNumber, pageSize){
        return mediaRepository.getAll(pageNumber, pageSize);
    }

    getMediaById(id){
        return mediaRepository.getById(id)
    }
}

module.exports = new MediaServices();
var Media = require('../models/media.model');

class MediaRepository{

    add({title, url, cover, isActive}){
        let newMedia = new Media({
            title,
            url,
            cover,
            isActive
        });

       return newMedia.save();
    }

    /**
     * 
     * @param {Number} pageNumber Current Page
     * @param {Number} PageSize  Size of records for the current Page
     */
    getAll(pageNumber, pageSize){
        return Media.find()
                    .skip( (pageNumber - 1) * pageSize)
                    .limit(pageSize);
    }

    getById(id){
        return Media.findById(id);
    }
}

module.exports = new MediaRepository();
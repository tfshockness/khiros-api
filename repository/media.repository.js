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

    getAll(){
        return Media.find();
    }

    getById(id){
        return Media.findById(id);
    }
}

module.exports = new MediaRepository();
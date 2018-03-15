var Media = require('../models/media.model');

class MediaRepository{

    add({title, url, cover, isActive}){
        let newMedia = new Media({
            title,
            url,
            cover,
            isActive
        });

        newMedia.save( err => {
            if(err) throw err;
        });

        return newMedia;
    }

    getAll(){
        return Media.find();
    }

    getById(id){
        return Media.findById(id);
    }
}

module.exports = new MediaRepository();
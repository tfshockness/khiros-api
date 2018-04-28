var Media = require('../models/media.model');

class MediaRepository{

   async add({title, url, cover, isActive}){
        let newMedia = new Media({
            title,
            url,
            cover,
            isActive
        });

       const res = await newMedia.save( err => {
            if(err) throw err;
        });

        return res;
    }

    getAll(){
        return Media.find();
    }

    getById(id){
        return Media.findById(id);
    }
}

module.exports = new MediaRepository();
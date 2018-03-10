let Professional = require('../models/professional.model');

class ProfessionalRepository{
    add({name, speciality, profileImg, credentials, bio, isActive}){
        let newProfessional = new Professional(
            {
                name,
                speciality,
                profileImg,
                credentials,
                bio,
                isActive
            }
        );
        newProfessional.save(err => {
            if(err) throw err;
            //Or maybe return the error????

        });

        return newProfessional;
    }

    getAll(){
        return Professional.find();
    }

    getById(id){
        return Professional.findById(id);
    }
}

module.exports = new ProfessionalRepository();
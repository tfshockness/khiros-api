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
        return newProfessional.save();
    }

    getAll(){
        return Professional.find();
    }

    getById(id){
        return Professional.findById(id);
    }
}

module.exports = new ProfessionalRepository();
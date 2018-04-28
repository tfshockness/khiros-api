let Professional = require('../models/professional.model');

class ProfessionalRepository{
    async add({name, speciality, profileImg, credentials, bio, isActive}){
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
        const res = await newProfessional.save(err => {
            if(err) throw err;
            //Or maybe return the error????

        });

        return res;
    }

    getAll(){
        return Professional.find();
    }

    getById(id){
        return Professional.findById(id);
    }
}

module.exports = new ProfessionalRepository();
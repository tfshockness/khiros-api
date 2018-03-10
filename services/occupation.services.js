const occupationRepository = require('../repository/occupation.repository');

class OccupationServices{

    addOccupation(occupation){
        return occupationRepository.add(occupation);
    }

    getAllOccupation(){
        return occupationRepository.getAll();
    }

    getOccupationById(id){
        return occupationRepository.getById(id);
    }

    addProfessional(occupatioId, {name, speciality, profileImg, credentials = "", bio = "", isActive}){
        let professional = {
            name,
            speciality,
            profileImg,
            credentials,
            bio,
            isActive
        };
        
        return occupationRepository.addProfessional(occupatioId, professional);
    }
}

module.exports = new OccupationServices();
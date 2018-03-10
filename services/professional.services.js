var professionalRepository = require('../repository/professional.repository');

class ProfessionalServices{
    addProfessional(professional){
        return professionalRepository.add(professional);
    }

    getAllProfessionals(){
        return professionalRepository.getAll();
    }

    getProfessionalById(id){
        return professionalRepository.getById(id);
    }
}

module.exports = new ProfessionalServices();
let Occupation = require('../models/occupation.model');

class OccupationRepository{
    async add({occupationName}){

        let newOccupation = new Occupation({
            occupationName
        });
        
        const res = await newOccupation.save(err => {
            if(err) throw err;
        });

        return res;
    }

    getAll(){
        return Occupation.find();
    }

    getById(id){
        return Occupation.findById(id);
    }

    addProfessional(occupationId, professional){

        return this.getById(occupationId)
                    .then( oc => {

                        if(oc == null){
                            throw 'Fuu';
                        };

                        oc.members.push(professional);

                        oc.save(err => {
                            if (err) throw err;
                        });

                        result = oc;
                    })
                    .catch(error => console.log(error, "Fu..."));
    }
}

module.exports = new OccupationRepository();
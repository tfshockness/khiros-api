const Company = require('../models/company.model');

class CompanyRepository{
    
    async addCompany({name, email, logoImage, branch = [], about, aboutImage}){
        let company = new Company({
            name,
            email,
            logoImage,
            branch,
            about,
            aboutImage
        });

       const res = await company.save(err => {
            if (err) throw err;
        });

        if(branch.length > 0){
            this.addBranch(res._id, branch);
        };

        return res;
    }

    addBranch(companyId, branch){
        return this.getCompanyById(companyId)
                    .then( cp => {
                        if(cp == null){
                            throw 'No Company';
                        };

                        cp.branch.push(branch);

                        cp.save(err => {
                            if(err) throw err;
                        });

                        return cp;
                    })
                    .catch(err => comsole.log(err));
    }

    getCompany(){
        return Company.find();
    }
    getCompanyById(companyId){
        return Company.findById(companyId);
    }

    getAllBranches(){

    }

    getBranchById(branchId){

    }
}
const companyRepository = require('../repository/company.repository');


class CompanyServices{

    addCompany(company){
        return companyRepository.addCompany(company);
    }
}
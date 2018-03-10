const Company = require('../company.model');
const should = require('chai').should();

describe('Company Validation', function(){
    let companyModel;

    beforeEach(function(){
        companyModel = {
            name: 'ShocknesSolutions',
            email: 'Solutionamostudo@gmail.com',
            logoImage: '/image/fakeimg.jpg',
            branch: [{
                phone: {
                    tel: '1232-123123',
                    cel: '3213-313234'
                },
                address: {
                    city: 'Pvh',
                    province: 'Rondonia',
                    country: 'Brasil',
                    postalCode: '78629123',
                    street: "Av. do meio",
                    number: 1423
                }
            }],
            about: 'Loren Ipsun Ipsan Ipset',
            aboutImage: '/image/anotherfakeimg.jpg'
        }
    });

    it('should accept all inputs without errors');
    it('name should be required');
    it('branch should be array with objects');
    it('branch should contain phone object and address object');
    it('phone should be a object');
    it('address should be a object');
    it('City, province, country, street, and number should be required in address');
    
    
});
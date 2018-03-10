const Professional = require('../professional.model');
const should = require('chai').should();

describe('Professional Validation', function(){
let professionalModel;
beforeEach(function(){
    professionalModel = {
        name: "Dr. Strange",
        speciality: "Be Strange",
        profileImg: "/img/strange.jpg",
        creadentials: "No idea what this supposed to be",
        bio: "Its a strange guy",
        isActive: true
    }
})

it('should accept all the correct input');
it('name should accept just Letters');
it('isActive should receibe value of true when not set');
it('name and speciality is required');
it('name and speciality do not accept empty string');
});
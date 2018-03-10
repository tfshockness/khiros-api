var mongoose = require('mongoose');

var Schema = mongoose.Schema;

const professionalInfo = require('./professional.model');

var occupation = new Schema({
    occupationName: {type: String, required: true},
    members:[professionalInfo]
});

module.exports = mongoose.model('Occupation', occupation);
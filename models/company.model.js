var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var address = new Schema({
    city: String,
    province: String,
    country: String,
    postalCode: String,
    street: String,
    number: Number
});

var branchSchema = new Schema({
    phone: {
        tel: String,
        cel: String
    },
    adress: address
});

var companySchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    logoImage: String,
    branch: [branchSchema],
    about: String,
    aboutImage: String
});

module.exports = mongoose.model('Company', companySchema);
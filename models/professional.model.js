var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var professionalSchema = new Schema({
    name: { type:String, required: true, match: /[a-zA-Z]/ },
    speciality: { type:String, required: true },
    profileImg: String,
    credentials: String,
    bio: String,
    isActive: { type: Boolean, default: true }

});
module.exports = professionalSchema;
//Dont need to create a model from professional, just export the schema to occupations
//and create the model from occupations
//module.exports = mongoose.model('Professional', professionalSchema);
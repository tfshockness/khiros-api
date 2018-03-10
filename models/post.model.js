var mongoose = require('mongoose');
var {titleValidator, 
    categoryValidator, 
    statusValidator, 
    textValidator} = require('../config/validators');

var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: { type:String, required: true, validate: titleValidator },
    subtitle: String,
    category: { type:String, required: true, validate: categoryValidator },
    text: { type:String, required: true, validate: textValidator  },
    status: { type: String, required: true,  default: "Rascunho", enum: ["Rascunho", "Publicado", "Arquivado", "Desativado" ] },
    image: String,
    createdAt: { type: Date, default: Date.now },
    publishedAt: Date
});

module.exports = mongoose.model('Post', postSchema);
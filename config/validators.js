const { postForm } = require('../lookup/validationMessages');

const isEmpty = val => typeof(val) === "string" && val.trim().length > 1;

exports.titleValidator = {
    validator: function(val){
        return val && isEmpty(val);
    },
    message: postForm.title.pt
};

exports.subtitleValidator = {
    validator: function(val){
        return val && isEmpty(val);
    },
    message: postForm.subtitle.pt
};

exports.textValidator = {
    validator: function(val){
        return val && isEmpty(val);
    },
    message: postForm.text.pt
};

exports.imageValidator = {
    validator: function(val){
        return val && isEmpty(val);
    },
    message: postForm.image.pt
};

exports.statusValidator = {
    validator: function(val){
        return  val && isEmpty(val);
    },
    message:postForm.status.pt
};

exports.categoryValidator = {
    validator: function(val){
        return  val && isEmpty(val);
    },
    message: postForm.category.pt
};

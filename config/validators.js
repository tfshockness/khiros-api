const { postForm } = require('../lookup/validationMessages');

const isEmpty = val => typeof(val) === "string" && val.trim().length > 1;

exports.titleValidator =[
    function(val){
        return isEmpty(val);
    },
    postForm.title.pt
];

exports.subtitleValidator = [
    function(val){
        return isEmpty(val);
    },
    postForm.subtitle.pt
];

exports.textValidator = [
    function(val){
        return isEmpty(val);
    },
    postForm.text.pt
];

exports.imageValidator = [
    function(val){
        return isEmpty(val);
    },
    postForm.image.pt
];

exports.statusValidator = [
    function(val){
        return isEmpty(val);
    },
    postForm.status.pt
];

exports.categoryValidator = [
    function(val){
        return isEmpty(val);
    },
    postForm.category.pt
]
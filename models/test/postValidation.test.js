const Post = require('../post.model');
const should = require('chai').should();

describe('Post Validation', function(){
    let postModel;
    beforeEach(function(){
        //Use that to setup some config afer each Test
        //For example, set valu for that user variable.
        postModel = {
            title: "Some Title",
            subtitle: "Another thing",
            category: "Test",
            text: "I forgot my Text thats why!!!",
            image: "img/there/somewere.jpg",
            status: "Rascunho",
            publishAt: "dont have anything here"
        }
    });
    it('should return validation error just for title, category, and text', function(done){
        let post = new Post({});

        post.validate( e => {
            should.exist(e.errors.text);
            should.exist(e.errors.title);
            should.exist(e.errors.category);
            should.not.exist(e.errors.subtitle);
            should.not.exist(e.errors.status);
            should.not.exist(e.errors.publishAt);
            should.not.exist(e.errors.image);
            done();
        });
    });
    it('should not save spaces or empty string on title, category, and text', function(done){
        let post = new Post({
            title: "        ",
            category: "       ",
            text: "      "
        });

        post.validate( e => {

            should.exist(e.errors.text);
            should.exist(e.errors.title);
            should.exist(e.errors.category);
            should.not.exist(e.errors.subtitle);
            should.not.exist(e.errors.status);
            should.not.exist(e.errors.publishAt);
            should.not.exist(e.errors.image);
            done();
        });

    });
    it('should return error for not string input', function(done){
        let post = new Post({
            title: {},
            category: [],
            text: []
        });
        post.validate( e => {

            should.exist(e.errors.text);
            should.exist(e.errors.title);
            should.exist(e.errors.category);
            should.not.exist(e.errors.subtitle);
            should.not.exist(e.errors.status);
            should.not.exist(e.errors.publishAt);
            should.not.exist(e.errors.image);
            done();
        });

    })
    it('should accept the inputs', function(done){
        let post = new Post(postModel);

        post.validate( e => {
            should.not.exist(e);
            done();
        })
    });
});
const Carousel = require('../carousel.model');
const should = require('chai').should();

describe('Carousel Validation', function(){
    let carouselModel;
    beforeEach(function(){
        carouselModel = {
            image: '/img/advert.png',
            title: 'Buy one get another 2%',
            link: {
                label: 'click here',
                url: '/go/there'
            },
            isActive: true
        }
    });

    it('should accept all the correct input');
    it('should have image, title, link (label and url) as required fields');
    it('should set false as default for isActive');
    it('link should be a object with label and url');

});
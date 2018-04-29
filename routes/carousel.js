var express = require('express');
var router = express.Router();
const carouselServices = require('../services/carousel.services');
const Pagination = require('../util/Pagination');
/**
 * Get all carousel (Adds)
 */

 //TODO Implment Pagination
router.get('/', async (req, res) => {
    try {
        const pagination = Pagination.getPagination(req.query.page, req.query.size);

        const carousel = await carouselServices.getAllCarousel(pagination.page, pagination.size);

        res.status().send();
    } catch (error) {
        res.status(400).send({error: error || error.message});
    }
    carouselServices.getAllCarousel()
                    .then( allCarousel => res.status(200).send(allCarousel))
                    .catch( error => res.status(400).send({error: error}));
});

/**
 * Add a new Carousel
 */
router.post('/', async (req, res) => {
    let carousel;
    try{
        carousel = await carouselServices.addCarousel(req.body);
        res.status(301).redirect(`/carousels/${carousel._id}`);
    }catch(err){
        res.status(403).send({ error: err });
    }
});

/**
 * Get a carousel by Id
 */
router.get('/:id', (req, res) => {

    carouselServices.getCarouselById(req.params.id)
                    .then( singleCarousel => {
                        singleCarousel ?
                        res.status(200).send(singleCarousel) :
                        res.status(404).send({error: `Carousel with id: ${req.params.id} was Not Found.`});
                    })
                    .catch( error => res.status(400).send({error: "The id sent is not valid or incorrect."}))
});

/**
 * Update a carousel by Id
 */
router.put('/:id', (req, res) => {

});

/**
 * Delete a carousel by Id
 */
router.delete('/:id', (req, res) => {

});

module.exports = router;
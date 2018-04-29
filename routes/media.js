var express = require('express');
var router = express.Router();
const mediaServices = require('../services/media.services');
const MediaListViewModel = require('../viewModels/MediaListViewModel');
const Pagination = require('../util/Pagination');

router.get('/', async (req, res) => {
    try {
        
        const pagination = Pagination.getPagination(req.query.page, req.query.size);

        const medias = await mediaServices.getAllMedia(pagination.page, pagination.size);

        res.status(200).send(new MediaListViewModel(medias, pagination.page, pagination.size));

    } catch (error) {
        
        res.status(400).send({ error: error.message});
    }
    
});


router.post('/', async (req, res) => {
    let media;

    try{

        media = await mediaServices.addMedia(req.body);

        res.status(301).redirect(`/medias/${media._id}`);

    }catch(err){

        return res.status(403).send({ error: err});

    }
});

router.get('/:id', (req, res) => {

    const media = mediaServices.getMediaById(req.params.id);
    media.then( singleMedia => {
        singleMedia ?
        res.status(200).send(singleMedia) :
        res.status(400).send({ error: `Media with id ${req.params.id} was Not Found.`});
    })
    .catch(error => res.status(400).send({error: "The Id sent is not valid or incorrect."}))
});

module.exports = router;
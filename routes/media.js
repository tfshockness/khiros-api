var express = require('express');
var router = express.Router();
const mediaServices = require('../services/media.services');

router.get('/', (req, res) => {
    const media = mediaServices.getAllMedia();

    media.then( allMedia => res.status(200).send(allMedia)).
            catch(error => res.status(400).send({error: error}))
});


router.post('/', (req, res) => {

    let media;
    try{
        media = mediaServices.addMedia(req.body);
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
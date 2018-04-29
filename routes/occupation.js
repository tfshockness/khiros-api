var express = require('express');
var router = express.Router();

const occupationServices = require('../services/occupation.services');

router.get('/', (req, res) => {
    occupationServices.getAllOccupation()
                        .then(occupations => res.status(200).send(occupations))
                        .catch(error => res.status(400).send({error: error}));
});

router.post('/', async (req, res) => {
    let occupation;
    try{
        occupation = await occupationServices.addOccupation(req.body);
        res.status(301).redirect(`/occupations/${occupation._id}`);
    }catch(err){
        res.status(400).send({ error: err});
    }
});

router.get('/:id', (req, res) => {
    occupationServices.getOccupationById(req.params.id)
                        .then( occupation => {
                            occupation ?
                            res.status(200).send(occupation) :
                            res.status(400).send({ error: `Occupation with Id ${req.params.id} Not Found.`});
                        })
                        .catch(error => res.status(400).send({ error: "The Id sent is not valid or incorrect"}));
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;
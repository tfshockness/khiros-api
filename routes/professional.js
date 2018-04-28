var express = require('express');
var router = express.Router({mergeParams: true});

const occupationServices = require('../services/occupation.services');

/**
 * Get All Professionals
 */
router.get('/', (req, res) => {
    occupationServices.getOccupationById(req.params.occupationId)
                        .then(occupation => res.status(200).send(occupation.members))
                        .catch(error => res.status(400).send({error: error}));
});

/**
 * Add a new Professional
 */
router.post('/', (req, res) => {
    let occupationWithProfessional;

    try {
        occupationWithProfessional = occupationServices.addProfessional(req.params.occupationId, req.body);
        // WHAT IS THAT????  I HAVE NO IDEA WHAT IS GOING ON HERE<< CHECK IT PLEASE <<
        res.status(301).redirect(`/occupations/${req.params.occupationId}/professionals/${req.body.fudeu}`)
    } catch (error) {
        res.status(400).send({ error: "FAILED!" });
    }
});

/**
 * Get a professional by Id
 */
router.get('/:professionalId', (req, res) => {

  let result = occupationServices.getOccupationById(req.params.occupationId)
                    .where('_id')
                    .equals(req.params.professionalId);
    res.status(200).send(result);
});

/**
 * Update a professional by Id
 */
router.put('/:professionalId', (req, res) => {
    //TODO - Implement put
});

/**
 * Delete a professional by Id
 */
router.delete('/:professionalId', (req, res) => {
    //TODO - Implment Delete
});

module.exports = router;
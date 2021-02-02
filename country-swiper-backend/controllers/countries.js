let router = require('express').Router()
let Countries = require("../models/countryList")

//returns all the countries and approved ones
router.get('/', async (req, res) => {
    try {
        const countries = await Countries.find()
        res.json(countries)
    } catch(err){
        res.json({message:err})
    }
})

//get id based on post
router.get('/:id', async (req, res) => {
    try {
        const countries = await Countries.findById(req.params.id)
        res.json(countries)
    } catch(err){
        res.json({message:err})
    }
})

//posts a countries and approved list to server
router.post('/', async (req,res) => {
    const approve = new Countries({
        "countries": req.body.approved,
        "approved": req.body.approved //probably going to be undefined at this point
    })
    try {
        const savedCountries = await approve.save()
        res.json(savedCountries)
    } catch (err) {
            res.json({message:err})
    }
})

//can be used to add a country to approved
router.patch('/:id', async (req,res) => {
    try {
        const updatedApprove = await Countries.updateOne( {_id: req.params.id},
            { $set : { approved: req.body.approved }})
        res.json(updatedApprove)
    } catch (err) {
            res.json({message:err})
    }
})

module.exports = router
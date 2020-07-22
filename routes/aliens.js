// this will run with an api call of mongodbURI /aliens/

const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');


// get all aliens
router.get('/', async (req,res) => {
    try{
        const aliens = await Alien.find();
        res.json(aliens);
    } catch(err) {
        res.send('Error: ' + err);
    }
})

// get the Alien by ID
router.get('/:id', async (req,res) => {
    try{
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    } catch(err) {
        res.send(`Error: ${err}`);
    }
})

// Add a new user to the DB
router.post('/', async (req,res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 = await alien.save();
        res.json(a1);
    } catch(err){
        res.send(`Error: ${err}`);
    }
})

// change a value for a user
router.patch('/:id', async (req,res) => {
    try{
        // get the alien
        const foundAlien = await Alien.findById(req.params.id);
        // loop through the params sent and update the db
        const paramsSent = Object.keys(req.body);
        paramsSent.forEach(param => {
            foundAlien[param] = req.body[param];
        })
        const a1 = await foundAlien.save();
        res.json(a1);
    } catch(err){
        res.send(`Error: ${err}`);
    }
})

// remove an alien completely
router.delete('/:id', async (req,res) => {
    try{
        // remove the alien
        await Alien.findByIdAndDelete(req.params.id);
        res.send(`Alien (${req.params.id}) has been deleted.`)
    } catch(err){
        res.send(`Error: ${err}`);
    }
})

module.exports = router;
const router = require('express').Router();
const uniqid = require('uniqid');
const db = require('../db/db.json');
const fs = require('fs');

router.get('/notes', (req, res) => {


    res.json(notedata);
})

router.post('/notes', (req, res) => {

    var newNote = req.body
    console.log(newNote);



    console.log(newNote.id);

    db.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(notedata, null, 4), (err) => {
        err ? console.log(err) : res.send(newNote);
    })
})

module.exports = router; 
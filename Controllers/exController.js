const router = require('express').Router();
const Exercise = require('../models/exerciseModel')

router.post('/create', function(req, res) {
    const body = req.body;
    const exercise = new Exercise(body);
    exercise.save(function(err, result) {
        res.status(201).send(result);
    })
});

router.get('/getexs', function (req, res, next) {
    Exercise.find(function (err, exercises) {
        if (err) return next(err);
        res.send(exercises);
    });
})

router.get('/get/:id', function (req, res, next) {
    Exercise.findById(req.params.id, function (err, exercises) {
        if (err) return next(err);
        res.send(exercises);
    });
})

router.put('/update/:id', function(req, res, next) {
    Exercise.findByIdAndUpdate(req.params.id, req.body, function(err, exercise) {
        if (err) return next(err);
        res.send(exercise);
    });
})

router.delete('/del/:id', function (req, res, next) {
    Exercise.findByIdAndRemove(req.params.id, function (err, exercise) {
        if (err) return next(err);
        res.status(204).send(exercise);
    })
})



module.exports = router;
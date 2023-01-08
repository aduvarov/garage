const Event = require('../models/Event');

const getEvents = (req, res) => {
    Event.find().then(events => {
        res.status(200).json(events);
    });
};

const getEvent = (req, res) => {
    Event.find({ _id: req.params.id })
        .then(events => {
            res.status(200).json(events);
        })
        .catch(error => res.status(400).json({ message: error.message }));
};

module.exports = {
    getEvents,
    getEvent,
};

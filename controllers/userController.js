const db = require("../models");

// Defining methods for the userController
module.exports = {
    findAll: function (req, res) {
        db.OurChores.find()
            .sort({ date: -1 })
            .then((dbOurChores) => res.json(dbOurChores))
            .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.OurChores.findById(req.params.id)
            .then((dbOurChores) => res.json(dbOurChores))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        db.OurChores.create(req.body)
            .then((dbOurChores) => res.json(dbOurChores))
            .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        db.OurChores.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        })
            .then((dbOurChores) => res.json(dbOurChores))
            .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.OurChores.findById({ _id: req.params.id })
            .then((dbOurChores) => dbOurChores.remove())
            .then((dbOurChores) => res.json(dbOurChores))
            .catch((err) => res.status(422).json(err));
    },
};
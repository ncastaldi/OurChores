const db = require("../models");

// Defining methods for the choreController
module.exports = {
    findAll: function (req, res) {
        db.Chore.find({})
            .sort({ date: -1 })
            .then((dbChores) => res.json(dbChores))
            .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Chore.findById(req.params.id)
            .then((dbChores) => res.json(dbChores))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Chore.create(req.body)
            .then((dbChores) => res.json(dbChores))
            .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Chore.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        })
            .then((dbChores) => res.json(dbChores))
            .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Chore.findById({ _id: req.params.id })
            .then((dbChores) => dbChores.remove())
            .then((dbChores) => res.json(dbChores))
            .catch((err) => res.status(422).json(err));
    },
};
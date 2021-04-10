const db = require("../models");

// Defining methods for the userController
module.exports = {
    findAll: function (req, res) {
        db.User.find({})
            .sort({ date: -1 })
            .then((dbChores) => res.json(dbChores))
            .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User.findById(req.params.id)
            .then((dbChores) => res.json(dbChores))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User.create(req.body)
            .then((dbChores) => res.json(dbChores))
            .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        db.User.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        })
            .then((dbChores) => res.json(dbChores))
            .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User.findById({ _id: req.params.id })
            .then((dbChores) => dbChores.remove())
            .then((dbChores) => res.json(dbChores))
            .catch((err) => res.status(422).json(err));
    },
};
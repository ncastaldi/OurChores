const router = require("express").Router();
const choreController = require("../controllers/choreController");

// Matches with "/api/chore"
router
    .route("/")
    .get(choreController.findAll)
    .post(choreController.create);

// Matches with "/api/chore/:id"
router
    .route("/:id")
    .get(choreController.findById)
    .put(choreController.update)
    .delete(choreController.remove);

module.exports = router;

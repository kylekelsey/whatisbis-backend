const express = require("express");
const router = express.Router();
const Item = require("../models/item");
const Class = require("../models/class");
const Icon = require("../models/icon");

router.get("/classes", (req, res, next) => {
  Class.find({})
    .then((data) => res.json(data))
    .catch(next);
});
router.get("/specs/:class", (req, res, next) => {
  Class.findOne({ name: req.params.class })
    .then((data) => res.json(data))
    .catch(next);
});

router.get("/items/:class/:spec", (req, res, next) => {
  Item.find({ class: req.params.class, spec: req.params.spec })
    .populate("enchantIcon")
    .populate("gems")
    .then((data) => res.json(data))
    .catch(next);
});

router.post("/items", (req, res, next) => {
  if (req.body.action) {
    Item.create(req.body)
      .populate("enchantIcon")
      .populate("gems")
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});

router.delete("/todos/:id", (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;

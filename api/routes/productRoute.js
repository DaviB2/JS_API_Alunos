const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.get("/", productController.getItems);

router.get("/:id", productController.getItemById)

module.exports = router;
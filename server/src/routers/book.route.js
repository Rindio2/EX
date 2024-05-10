const express = require("express");
const bookRouter = express.Router();
const bookController = require("../controllers/book.controller");

bookRouter.get("/api/v1/databasebook", (req, res) => {
    bookController.getAllBook(req, res);
});

bookRouter.post("/api/v1/add", (req, res) => {
    bookController.add(req, res);
});

bookRouter.get("/api/v1/book/:id", (req, res) => {
    bookController.getOneBook(req, res);
});

bookRouter.delete("/api/v1/book/:id", (req, res) => {
    bookController.deleteOneBook(req, res);
});
bookRouter.put("/api/v1/book/:id", bookController.updateBook);

module.exports = bookRouter;

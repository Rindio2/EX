const express = require("express");
const bookRouter = express.Router();
const database = require("../configs/db.config");
const bookController = require("../controllers/book.controller")

bookRouter.get("/api/v1/databasebook",(req, res)=>{
    bookController.getAllBook(req,res)
});

module.exports = bookRouter;
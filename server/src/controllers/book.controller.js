const bookService = require("../services/book.service")

async function getAllBook(req,res) {
    const book = await bookService.getAllBook()
    res.status(200).json({
        data: book
    })
}

async function getOneBook(id) {
    const book = await bookService.getOneBook()
    res.status(200).json({
        data: book
    })
}

module.exports = {
    getAllBook,
    getOneBook
}
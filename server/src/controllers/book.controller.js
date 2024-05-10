const bookService = require("../services/book.service");
const authService = require("../services/auth.service");

async function getAllBook(req, res) {
    const book = await bookService.getAllBook();
    res.status(200).json({
        data: book
    });
}

async function getOneBook(req, res) {
    const id = req.params.id;
    const book = await bookService.getOneBook(id);
    res.status(200).json({
        data: book
    });
}

async function deleteOneBook(req, res) {
    const id = req.params.id;
    try {
        // Call the service function to delete the book
        await bookService.deleteOneBook(id);
        res.status(200).json({
            message: 'Book deleted successfully'
        });
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({
            message: 'Failed to delete book'
        });
    }
}
async function add(req, res) {
    const data = req.body;
    const bookId = await authService.add(data); // Assuming add function returns bookId
    if (bookId) {
        res.status(200).json({
            message: 'Create new book success with ID: ' + bookId,
        });
    } else {
        res.status(500).json({
            message: 'Failed to create new book',
        });
    }
}
async function updateBook(req, res) {
    const id = req.params.id;
    const updatedData = req.body;
    try {
        await bookService.updateBook(id, updatedData);
        res.status(200).json({ message: 'Book updated successfully' });
    } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).json({ message: 'Failed to update book' });
    }
}

module.exports = {
    getAllBook,
    getOneBook,
    deleteOneBook,
    add, // Don't forget to export this function
    updateBook
};

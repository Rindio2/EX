const authService = require("../services/auth.service");

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

module.exports = {
    add,
};

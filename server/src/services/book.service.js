const database = require("../configs/db.config");

async function getAllBook() {
    const query = "SELECT * FROM book ";
    let result = await database.execute(query);
    return result[0];
}

async function getOneBook(id) {
    const query = `SELECT * FROM book WHERE id = ${id}`;
    let result = await database.execute(query);
    return result[0];
}
module.exports = {
    getAllBook,
    getOneBook
}
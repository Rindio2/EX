const database = require("../configs/db.config");

async function getAllBook() {
    const query = "SELECT * FROM book ";
    try {
        const result = await database.execute(query);
        return result[0];
    } catch (error) {
        console.error("Error getting all books:", error);
        return [];
    }
}

async function getOneBook(id) {
    const query = `SELECT * FROM book WHERE id = ${id}`;
    try {
        const result = await database.execute(query);
        return result[0];
    } catch (error) {
        console.error("Error getting book:", error);
        return null;
    }
}

async function deleteOneBook(id) {
    const query = `DELETE FROM book WHERE id = ${id}`;
    try {
        await database.execute(query);
        return true;
    } catch (error) {
        console.error("Error deleting book:", error);
        return false;
    }
}

module.exports = {
    getAllBook,
    getOneBook,
    deleteOneBook 
};

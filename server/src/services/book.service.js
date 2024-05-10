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

async function updateBook(id, updatedData) {
    const { name, description, price } = updatedData;

    // Kiểm tra xem trường 'name' có tồn tại và không phải là null
    if (!name) {
        throw new Error("Name field cannot be null");
    }

    try {
        // Tiến hành cập nhật sách trong cơ sở dữ liệu
        const [result] = await pool.query(
            "UPDATE book SET name = ?, description = ?, price = ? WHERE id = ?",
            [name, description, price, id]
        );

        // Kiểm tra xem có bản ghi nào được cập nhật không
        if (result.affectedRows === 0) {
            throw new Error(`Book with id ${id} not found`);
        }

        return id; // Trả về id của sách đã được cập nhật thành công
    } catch (error) {
        throw error; // Ném lỗi nếu có bất kỳ lỗi nào xảy ra trong quá trình cập nhật
    }
}





module.exports = {
    getAllBook,
    getOneBook,
    deleteOneBook,
    updateBook
};

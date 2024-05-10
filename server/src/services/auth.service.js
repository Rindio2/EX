const database = require("../configs/db.config");

async function add(data){
    const { name, description, price, created_at, update_at } = data;
    const query = `INSERT INTO book (name, description, price, created_at, update_at) 
                   VALUES ('${name}', '${description}', '${price}', '${created_at}', '${update_at}')`;

    try {
        const result = await database.execute(query);
        if (result) {
            return result[0].insertId;
        }
        return false;
    } catch (error) {
        console.error("Error adding book:", error);
        return false;
    }
}

module.exports = {
    add
};

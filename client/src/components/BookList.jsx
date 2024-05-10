import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './BookList.css'; // Import your CSS file

export default function BookList() {
    const navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [editedData, setEditedData] = useState({});

    useEffect(async () => {
        const response = await axios.get("http://localhost:8080/api/v1/databasebook");
        setBooks(response.data.data);
    }, []);

    const handleChange = (id, field, value) => {
        setEditedData(prevState => ({
            ...prevState,
            [id]: {
                ...prevState[id],
                [field]: value
            }
        }));
    };

    const handleSaveChanges = async (id) => {
        try {
            await axios.put(`http://localhost:8080/api/v1/book/${id}`, editedData[id]);
            // Update the state to reflect the changes
            setBooks(prevBooks =>
                prevBooks.map(book =>
                    book.id === id ? { ...book, ...editedData[id] } : book
                )
            );
            // Clear the edited data
            setEditedData(prevState => ({
                ...prevState,
                [id]: {}
            }));
        } catch (error) {
            console.error("Error saving changes:", error);
            // Handle error, maybe display a message to the user
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/book/${id}`);
            // If deletion is successful, update the state to remove the deleted book
            setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
        } catch (error) {
            console.error("Error deleting book:", error);
            // Handle error, maybe display a message to the user
        }
    };

    return (
        <div className="book-list-container">
            <div>
                <h1 className="book-list-heading">BookList</h1>
                <table className="book-list-table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>DESCRIPTION</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.id}</td>
                                <td>
                                    <input
                                        type="text"
                                        value={editedData[item.id]?.name || item.name}
                                        onChange={(e) => handleChange(item.id, 'name', e.target.value)}
                                        className="book-list-input"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={editedData[item.id]?.description || item.description}
                                        onChange={(e) => handleChange(item.id, 'description', e.target.value)}
                                        className="book-list-input"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        value={editedData[item.id]?.price || item.price}
                                        onChange={(e) => handleChange(item.id, 'price', e.target.value)}
                                        className="book-list-input"
                                    />
                                </td>
                                <td>
                                    <button onClick={() => handleSaveChanges(item.id)} className="book-list-button">Save</button>
                                    <button onClick={() => handleDelete(item.id)} className="book-list-button book-list-delete-button">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={() => navigate("/add")} className="book-list-button book-list-add-button">Add new book</button>
            </div>
        </div>
    );
}

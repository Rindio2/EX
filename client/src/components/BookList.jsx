import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function BookList() {

    const navigate= useNavigate();
    const [book,setBook]= useState([]);

    useEffect( async()=>{
        const response = await axios.get("http://localhost:8080/api/v1/databasebook");
        console.log("1111", response.data.data);
        setBook(response.data.data);
    },[]);

    const AddBook =()=>{
        navigate("/add");
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/v1/book/${id}`);
            // If deletion is successful, update the state to remove the deleted book
            setBook(prevBooks => prevBooks.filter(book => book.id !== id));
        } catch (error) {
            console.error("Error deleting book:", error);
            // Handle error, maybe display a message to the user
        }
    };
    
    return (
        <div>
            <div>
                <h1>BookList</h1>
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>DESCRIPSION</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {book.map((item,index)=>{
                            return (
                                <tr key={item.id}>
                                    <td>{index+1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={() => handleChange(item.id)}>Change</button>
                                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div>
                <button onClick={AddBook}>Add new book</button>
            </div>
        </div>
    );
}

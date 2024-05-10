import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Add.css'; // Import your CSS file

export default function Add() {

    const [newbook,setNewbook] = useState({
        name:"",
        description:"",
        price:"",
        created_at:"",
        update_at:""
    })

    const navigate = useNavigate();

    const handleChange=(e)=>{
        let name= e.target.name;
        let value=e.target.value;
        setNewbook({
            ...newbook,[name]:value
        })
    }
    const AddBook = async () => {
        try {
            await axios.post("http://localhost:8080/api/v1/add", newbook);
            navigate("/");
        } catch (error) {
            console.error("Error adding book:", error);
            // Handle error, maybe display a message to the user
        }
    };
    
  return (
    <div className="add-container">
        <h1 className="add-heading">Thêm sách mới</h1>
        <label className="add-label" htmlFor="name">NAME</label><br />
        <input 
            name="name" 
            type="text" 
            className="add-input"
            onChange={handleChange}
            /> <br />

        <label className="add-label" htmlFor="description">DESCRIPTION</label><br />
        <input 
            name="description" 
            type="text"
            className="add-input"
            onChange={handleChange}
            /> <br />

        <label className="add-label" htmlFor="price">PRICE</label><br />
        <input 
            name="price" 
            type="text" 
            className="add-input"
            onChange={handleChange}
            /> <br />

        <label className="add-label" htmlFor="created_at">CREATE AT</label><br />
        <input 
            name="created_at" 
            type="date" 
            className="add-input"
            onChange={handleChange}
            /> <br />

        <label className="add-label" htmlFor="update_at">UPDATE AT</label><br />
        <input 
            name="update_at"
            type="date" 
            className="add-input"
            onChange={handleChange}
            /> <br />
                    
        <button onClick={AddBook} className="add-button">Add</button>
    </div>
  )
}


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    <div>
        Add <br />

            <h1>Thêm sách mới</h1>
            <label htmlFor="">NAME</label><br />
            <input 
                name="name" 
                type="text" 
                onChange={handleChange}
                /> <br />

            <label htmlFor="">DESCRIPSION</label><br />
            <input 
                name="description" 
                type="int"
                onChange={handleChange}
                /> <br />

            <label htmlFor="">PRICE</label><br />
            <input 
                name="price" 
                type="int" 
                onChange={handleChange}
                /> <br />

            <label htmlFor="">CREATE AT</label><br />
            <input 
                name="created_at" 
                type="date" 
                onChange={handleChange}
                /> <br />

            <label htmlFor="">UPDATE AT</label><br />
            <input 
                name="update_at"
                type="date" 
                onChange={handleChange}
                /> <br />
                    
            <button onClick={AddBook}>Add</button>
    </div>
  )
}

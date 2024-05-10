import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function BookList() {

    const [book,setBook]= useState([]);

    useEffect( async()=>{
        const book = await axios.get("http://localhost:8080/api/v1/databasebook");
        console.log("1111",book.data.data);
        setBook(book.data.data)
    },[])

    const AddBook =()=>{
        console.log("them book");
    }

    const handleChange =(e)=>{}

    const handleDelete =(e)=>{}

    const handleFix =(e)=>{}

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
                    {book.map((item,index,arr)=>{
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={handleChange}>Change</button>
                                    <button onClick={handleDelete}>Delete</button>
                                </td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

        <div>
            <h1>Thêm sách mới</h1>
            <label htmlFor="">NAME</label><br />
            <input 
                name="name" 
                type="text" 
                onChange={handleFix}
                /> <br />

            <label htmlFor="">DESCRIPSION</label><br />
            <input 
                name="description" 
                type="int"
                onChange={handleFix}
                /> <br />

            <label htmlFor="">PRICE</label><br />
            <input 
                name="price" 
                type="text" 
                onChange={handleFix}
                /> <br />

            <label htmlFor="">CREATE AT</label><br />
            <input 
                name="created_at" 
                type="date" 
                onChange={handleFix}
                /> <br />

            <label htmlFor="">UPDATE AT</label><br />
            <input 
                name="update_at"
                type="date" 
                onChange={handleFix}
                /> <br />
                    
            <button onClick={AddBook}>Add</button>
        </div>

    </div>
  )
}



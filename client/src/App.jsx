import React from 'react'
import {Route,Routes} from "react-router-dom"
import BookList from './components/BookList'
import Add from './components/Add'


export default function App() {
  return (
    <div>
      <Routes>

        <Route path='/' element={<BookList></BookList>}> </Route>
        <Route path='/add' element={<Add></Add>}> </Route>
        
      </Routes>

    </div>
  )
}

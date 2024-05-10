import React from 'react'
import {Route,Routes} from "react-router-dom"
import BookList from './components/BookList'


export default function App() {
  return (
    <div>
      App
      <Routes>

        <Route path='/' element={<BookList></BookList>}> </Route>
      </Routes>

    </div>
  )
}

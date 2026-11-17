import React from 'react'
import {Routes, Route} from "react-router-dom"
import Homepage from './pages/Homepage.jsx'
import Addstudent from './pages/Addstudent.jsx'
import Viewstudent from './pages/Viewstudent.jsx'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/addstudent' element={<Addstudent/>}/>
      <Route path='/viewstudent' element={<Viewstudent/>}/>
    </Routes>

    </>
  )
}

export default App
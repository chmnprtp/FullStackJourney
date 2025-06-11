import React from 'react'
import MyNavbar from './MyNavbar'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from '../../pages/Home'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Signup from '../../pages/Signup'
import NotFound from '../../pages/NotFound'

const Routing1 = () => {
  return (
    <div>
        <BrowserRouter>
        <MyNavbar/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/Signup' element={<Signup/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing1
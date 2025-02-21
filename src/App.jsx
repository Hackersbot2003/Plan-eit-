import React from 'react'
import Navebar from './components/Navebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ChatBot from './pages/ChatBot.jsx'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Contact from './components/Contact.jsx'
import Frame from './components/Spliter.jsx'
import Ai from './components/Ai.jsx'

import Rent from './components/Rentalbike.jsx'


const App = () => {
  return (
  <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Navebar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/Contact' element={<Home/>}/>
          <Route path='/Features' element={<Home/>}/>
          <Route path='/About' element={<Home/>}/>  
          <Route path='/contact' element= {<Contact/>}/>
          <Route path='/Splite' element = {<Frame/>}/>
          <Route path='/Ai' element = {<Ai/>}/>
         <Route path='/rent' element={<Rent/>}/>
       
          
      </Routes>
      

      <ChatBot/>
     
     
 
      
    </div></BrowserRouter>
  )
}

export default App

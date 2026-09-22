import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './home'
import Add from './add'
import Update from './update'
import Delete from './delete'
import NavBar from './navbar'
import Employess from './employees'

function App() {
  return(
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/employees" element={<Employess/>}/>
        <Route path="/register" element={<Add/>}/>
        <Route path="/update" element={<Update/>} />
        <Route path="/delete" element={<Delete/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

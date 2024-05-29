import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Projects'
import Services from './components/Services'
import Client from './components/Clients'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Footer from './components/Footer'

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar ></Navbar> 
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/projects' element={<Project/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/clients' element={<Client/>}/>
      <Route path='*' element={<div>Error found</div>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

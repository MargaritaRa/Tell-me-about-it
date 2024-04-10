import {Outlet} from "react-router-dom"
import Navbar from "./Navbar"


function App() {

  return (
   
    <div>
      <Navbar />

      <h1>Tell Me About It</h1>

      <Outlet />
      
    </div>

  )
}

export default App

// routing --> multiple pages

// serverv --> json-server

// GET/movies --> data for ALL movies
// GET/movie1 

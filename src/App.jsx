import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from "./Components/Home"
import Pdf from "./Components/Pdf"
import About from "./Components/About"
import Blog from "./Components/Blog"
import Contactus from "./Components/Contactus"

function App() {
  return (
    <Router>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/Pdf" Component={Pdf} />
      <Route path="/Blog" Component={Blog} />
      <Route path="/Contactus" Component={Contactus} />

    </Router>
  )
}

export default App

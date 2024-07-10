import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Navbar/Navbar.jsx'
import Footer from './Footer/Footer.jsx'
import PaginaPrincipal from './PaginaPrincipal.jsx'
import FormCita from './FormCita.jsx'

function App() {


  return (
    <>
     <Router>
          <Navbar />        
            <Routes>
              <Route path="/" element={<PaginaPrincipal />} />
              <Route path="/registrarCita" element={<FormCita />} />
            
            </Routes>
        
          <Footer />
        
      </Router>
    </>
  )
}

export default App

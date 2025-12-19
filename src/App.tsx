import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import './App.css'
import About from "./pages/About";
import Shop from "./pages/Shop";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

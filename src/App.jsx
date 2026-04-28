import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ejercicio1 from "./components/Ejercicio1";
import Ejercicio2 from "./components/Ejercicio2";
import Ejercicio3 from "./components/Ejercicio3";
import Ejercicio4 from "./components/Ejercicio4";
import Ejercicio5 from "./components/Ejercicio5";
import Ejercicio6 from "./components/Ejercicio6";
import Ejercicio7 from "./components/Ejercicio7";
import Ejercicio8 from "./components/Ejercicio8";
import Ejercicio9 from "./components/Ejercicio9";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicio1" element={<Ejercicio1 />} />
        <Route path="/ejercicio2" element={<Ejercicio2 />} />
        <Route path="/ejercicio3" element={<Ejercicio3 />} />
        <Route path="/ejercicio4" element={<Ejercicio4 />} />
        <Route path="/ejercicio5" element={<Ejercicio5 />} />
        <Route path="/ejercicio6" element={<Ejercicio6 />} />
        <Route path="/ejercicio7" element={<Ejercicio7 />} />
        <Route path="/ejercicio8" element={<Ejercicio8 />} />
        <Route path="/ejercicio9" element={<Ejercicio9 />} />
        
  
      </Routes>
    </BrowserRouter>
  )
}

export default App

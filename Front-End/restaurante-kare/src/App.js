import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hamburguer from "./pages/Hamburguer";
import Sobremesa from "./pages/Sobremesa";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hamburguer" element={<Hamburguer/>}/>        
        <Route path="/sobremesa" element={<Sobremesa/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

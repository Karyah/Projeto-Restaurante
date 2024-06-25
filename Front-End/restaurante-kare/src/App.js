import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hamburguer from "./pages/Hamburguer";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hamburguer" element={<Hamburguer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

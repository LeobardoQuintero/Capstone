import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SingleProduct from "./Pages/SingleProduct";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="Title">Ecommerce Website</div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path='/product/:id' element={<SingleProduct/>} />
        </Routes>
      </div>
      <footer className="footer">  </footer>
    </>
  );
}

export default App;

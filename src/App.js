import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import About from "./component/About.";
import Home from "./component/Home";




function App() {
  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<Product />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
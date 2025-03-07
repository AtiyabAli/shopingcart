import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Products from "./Pages/Products";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products/>}></Route>
      </Routes>
      <Routes>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

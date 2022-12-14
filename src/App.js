import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Orders from "./Component/Orders/Orders";
import Products from "./Component/Products/Products";
import Header from './Shared/Header/Header';


function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
      <Route path="/orders" element={<Orders/>}></Route>
    </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import OrdersReview from "./Component/OrdersReview/OrdersReview";
import Products from "./Component/Products/Products";
import Header from './Shared/Header/Header';


function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
      <Route path="/orders" element={<OrdersReview/>}></Route>
    </Routes>
    </>
  );
}

export default App;

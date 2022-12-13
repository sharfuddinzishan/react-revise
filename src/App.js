import { Route, Routes } from "react-router-dom";
import Products from "./Component/Products/Products";
import Header from './Shared/Header/Header';


function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/">Home</Route>
      <Route path="/products" element={<Products></Products>}>Home</Route>
    </Routes>
    </>
  );
}

export default App;

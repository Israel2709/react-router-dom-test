import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  const isLogged = true;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isLogged ? <h1>Home</h1> : <h1>login</h1>} />
      </Routes>
      {/*<div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products">
                <Route path="" element={<Products />} />
                <Route path=":id" element={<ProductDetail />} />
              </Route>
            </Routes>
          </div>
        </div>
  </div>*/}
    </div>
  );
}

export default App;

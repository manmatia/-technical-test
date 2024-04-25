import axios from "axios";
import Home from "./view/home/Home.jsx";
import EditProducts from "./view/edit/EditProducts.jsx";
import CreateProducts from "./view/create/CreateProducts.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/edit/:id" element={<EditProducts />} />
        <Route path="/create" element={<CreateProducts />} />
      </Routes>
    </div>
  );
}

export default App;

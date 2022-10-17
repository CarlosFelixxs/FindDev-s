import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
       </Routes>
      </BrowserRouter>
    </>
  );
}


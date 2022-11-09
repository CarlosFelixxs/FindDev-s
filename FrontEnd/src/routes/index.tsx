import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import FormVacancy from "../pages/CriacaoVaga/FormVacancy";
import DevSearchVacancyResult from "../pages/DevSearchVacancyResult/DevSearchVacancyResult";
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
          <Route path="/formulario-vaga" element={<FormVacancy />} />
          <Route path="/resultado-busca-vaga" element={<DevSearchVacancyResult />} />
       </Routes>
      </BrowserRouter>
    </>
  );
}

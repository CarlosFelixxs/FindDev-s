import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import FormVacancy from "../pages/CriacaoVaga/FormVacancy";
import DevSearchVacancyResult from "../pages/DevSearchVacancyResult/DevSearchVacancyResult";
import JobsEncerrados from "../pages/JobsEncerrados/JobsEncerrados";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Perfil from "../pages/PerfilDev";

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
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/jobs-encerrados" element={<JobsEncerrados />} />
       </Routes>
      </BrowserRouter>
    </>
  );
}

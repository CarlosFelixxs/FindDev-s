import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Perfil from "../pages/PerfilDev";
import OptionDev from "../pages/OptionLog/Dev";
import OptionEmp from "../pages/OptionLog/emp";
import FormVacancy from "../pages/CriacaoVaga/FormVacancy";
import DevSearchVacancyResult from "../pages/DevSearchVacancyResult/DevSearchVacancyResult";

export const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/option-dev" element = {<OptionDev />}/>
          <Route path="/option-emp" element = {<OptionEmp />}/>
          <Route path="/formulario-vaga" element={<FormVacancy />} />
          <Route path="/resultado-busca-vaga" element={<DevSearchVacancyResult />} />
       </Routes>
      </BrowserRouter>
    </>
  );
}

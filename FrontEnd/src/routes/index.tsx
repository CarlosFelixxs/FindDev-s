import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import FormVacancy from "../pages/CriacaoVaga/FormVacancy";
import DevSearchVacancyResult from "../pages/DevSearchVacancyResult/DevSearchVacancyResult";
import CompanyPublichedVacancy from "../pages/CompanyPublishedVacancy/CompanyPublichedVacancy";
import JobsEncerrados from "../pages/JobsEncerrados/JobsEncerrados";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Perfil from "../pages/PerfilDev";
import Collaborators from "../pages/Collaborators/Collaborators";
import OptionDev from "../pages/OptionLog/Dev";
import OptionEmp from "../pages/OptionLog/emp";
import PerfilCompany from "../pages/PerfilCompany/index";

export const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/menu-dev" element = {<OptionDev />}/>
          <Route path="/menu-company" element = {<OptionEmp />}/>
          <Route path="/formulario-vaga" element={<FormVacancy />} />
          <Route path="/resultado-busca-vaga" element={<DevSearchVacancyResult />} />
          <Route path="/perfil-dev" element={<Perfil />} />
          <Route path="/perfil-company" element={<PerfilCompany />} />
          <Route path="/jobs-encerrados" element={<JobsEncerrados />} />
          <Route path="/vagas-publicadas" element={<CompanyPublichedVacancy />} />
          <Route path="/colaboradores" element={<Collaborators />} />
       </Routes>
      </BrowserRouter>
    </>
  );
}

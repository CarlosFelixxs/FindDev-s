import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';

import vagaImg from "../../assets/images/Hiring-cuate 1.png";
import close from "../../assets/images/x-close.png";

import VacancyCard from '../../shared/components/VacancyCard';
import HeaderLogado from '../../shared/components/HeaderLogado/Index';
import VacancyCardDetailed from '../../shared/components/VacancyCardDetailed';
import Modal from '../../shared/components/ModalResult/ModalResult';
import api from '../../services/api';

export default function CompanyPublichedVacancy() {

  const navigate = useNavigate();

  const [isVacancySelected, setIsVacancySelected] = useState(false);

  
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const [senioridade, setSenioridade] = useState("");
  const [stack, setStack] = useState("");
  const [salary, setSalary] = useState(-1);
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(-1);

  const selectCard = (senioridade: string, stack: string, title: string, company: string, description: string, id: number, salary?: number ) => {
    setIsVacancySelected(true);
    setSenioridade(senioridade);
    setStack(stack);
    setTitle(title);
    setCompany(company);
    setDescription(description);
    setId(id);
    salary ? setSalary(salary) : setSalary(-1);
  };

  const deleteToVacancy = () => {
    api.delete(`/vagas/${id}`)
                .then((resposta) => {
                  setIsModalVisible(true);
                  setTimeout(() => {
                      setIsModalVisible(false);
                      navigate("/menu-company");
                  }, 4000);
                })
                .catch((error) => {
                    console.log(error)
                });
  }

  const buttonCard = (senioridade: string, stack: string, title: string, company: string, description: string, id: number, salary?: number ) => {
    return (
      <button onClick={() => selectCard(senioridade, stack, title, company, description, id, salary)} className={styles.button}>
        <img src={close} alt="check" />
      </button>
    )
  };

  const buttonCardDetailed = (
      <button onClick={() => deleteToVacancy()} className={styles.buttonCardDetailed}>
        APAGAR VAGA
      </button>
  )

  const[vacancies, setVacancies] = useState([
    {
      "senioridade": '',
      "funcao": "",
      "titulo": "",
      "descricao": "",
      "desenvolvedor": null,
      "avaliado": false,
      "encerrado": false,
      "id": 0
    },
    ]);

  useEffect(() => {
    api.get(`/vagas/empresa/${sessionStorage.getItem("idUser")}`)
    .then((resposta) => {
      let data = resposta.data;

      const vagas = data.map((vaga: any) => {
        const objVaga = vaga;
        return {
          senioridade: objVaga.senioridade,
          funcao: objVaga.funcao,
          titulo: objVaga.titulo,
          descricao: objVaga.descricao,
          desenvolvedor: objVaga.desenvolvedor,
          avaliado: objVaga.avaliado,
          encerrado: objVaga.encerrado,
          id: objVaga.id,
        }
      });
      console.log("teste")
      setVacancies(vagas);
      console.log(vacancies);
    }).catch((error) => {
      console.log(error)
    });

}, []);
  
  const showVacancySelected = () => {
    if (id !== -1) {
      return (
        <VacancyCardDetailed
          id={id}
          senioridade = {senioridade}
          stack = {stack}
          salary = {salary}
          company = {company}
          title = {title}
          description = {description}
          button={buttonCardDetailed}
        />
      )
    }
  }
  

  const textModal = "Você será redirecionado para o menu principal";
    
  return (
    <>
      <HeaderLogado isDevOrCompany={"company"}/>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.titleLeft}>
            Aqui estão suas vagas publicadas:
          </div>
          <div className={styles.cardsContainer}>
            {
            vacancies.length > 1 && vacancies.map((vaga) => (
              <>
                <VacancyCard
                  id={vaga.id}
                  stack={vaga.funcao}
                  senioridade={vaga.senioridade}
                  title={vaga.titulo}
                  button={buttonCard(
                    vaga.senioridade,
                    vaga.funcao,
                    vaga.titulo,
                    "",
                    vaga.descricao,
                    vaga.id,
                  )}
                  description={vaga.descricao}
                  key={vaga.id}
                />
              </>
            ))
            }
          </div>
        </div>
        <div className={styles.right}>
          {isVacancySelected ? (
              showVacancySelected()
            ): (
            <img src={vagaImg} alt="Job offer" />
          )}
        </div>
        {isModalVisible && <Modal title={"Vaga cancelada!"} text={textModal} />}
      </div>
    </>
  )
}

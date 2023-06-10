import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import styles from './styles.module.css';

import jobOffersImage from "../../assets/images/Job-offers-bro.png";
import check from "../../assets/images/ckeck.png";


import VacancyCard from '../../shared/components/VacancyCard';
import HeaderLogado from '../../shared/components/HeaderLogado/Index';
import VacancyCardDetailed from '../../shared/components/VacancyCardDetailed';
import Modal from '../../shared/components/ModalResult/ModalResult';
import api from '../../services/api';

export default function DevSearchVacancyResult() {

  const navigate = useNavigate();
  const {register, handleSubmit} = useForm();


  const [isVacancySelected, setIsVacancySelected] = useState(false);

  const [vacancies, setVacancies] = useState([
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
  
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isSearchModalVisible, setIsSearchModalVisible] = useState(true);
  
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

  const registerObj = {
    "idDesenvolvedor": sessionStorage.getItem("idUser"),
    "idVaga": id
  }

  const registerToVacancy = () => {
    console.log(id)
    api.post('/candidaturas', registerObj)
        .then((resposta) => {
          console.log(resposta.data);
          setIsModalVisible(true);
          setTimeout(() => {
              setIsModalVisible(false);
              navigate("/menu-dev");
          }, 5000);
        })
        .catch((error) => {
            console.log(error);
        });
  }

  const submitVacancySearch = async (e : any) => {

    api.get(`/vagas/busca-filtrada/${e.stack.toUpperCase()}/${e.senioridade.toUpperCase()}`)
    .then((resposta) => {
    let data = resposta.data;

    const vagas = data.map((vaga: any) => {
      const objVaga = vaga;
      if (objVaga.desenvolvedor == null) {
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
      }
      return null;
    });
    setVacancies(vagas);
    }).catch((error) => {
        console.log(error)
    });
    setIsSearchModalVisible(false);
  }

  const buttonCard = (senioridade: string, stack: string, title: string, company: string, description: string, id: number, salary?: number ) => {
    return (
      <button onClick={() => selectCard(senioridade, stack, title, company, description, id, salary)} className={styles.button}>
        <img src={check} alt="check" />
      </button>
    )
  };

  const buttonCardDetailed = (
      <button onClick={() => registerToVacancy()} className={styles.buttonCardDetailed}>
        CANDIDATAR-SE
      </button>
  )
  
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

  const SearchVacancyModal = () => {
  
    return (
      <div className={styles.modal}>
          <div className={styles.containerModal}>
              <div className={styles.content}>
                  <span className={styles.title}>Características da vaga que procura:</span>
                  <form className={styles.form}  onSubmit={handleSubmit(submitVacancySearch)}>
                      <div className={styles.labelInput}>
                          <label>Senioridade</label>
                          <select className={styles.input} {...register("stack")}>
                          <option value="" selected disabled>Selecione uma frente de desenvolvimento...</option>
                                  <option>FrontEnd</option>
                                  <option>BackEnd</option>
                                  <option>DevOps</option>
                          </select>
                      </div>
                      <div className={styles.labelInput}>   
                          <label>Senioridade</label>
                          <select className={styles.input} {...register("senioridade")}>
                              <option value="" selected disabled>Selecione a senioridade...</option>
                              <option>Junior</option>
                              <option>Pleno</option>
                              <option>Senior</option>
                          </select>
                      </div>
                      <button className={styles.buttonModal}>
                        PROCURAR
                      </button>
                  </form>
              </div>
          </div>
      </div>
    )
  }
  

  const textModal = "Você acaba de candidatar uma vaga! Agora basta aguardar uma resposta em seu email pelo contratante!";
    
  return (
    <>
      <HeaderLogado isDevOrCompany={"dev"}/>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.titleLeft}>
            Aqui estão suas vagas ideais:
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
            <img src={jobOffersImage} alt="Job offer" />
          )}
        </div>
        {isModalVisible && <Modal title={"Parabéns!"} text={textModal} />}
        {isSearchModalVisible && <SearchVacancyModal />}
      </div>
    </>
  )
}
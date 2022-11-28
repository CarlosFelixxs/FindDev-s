import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'

import styles from './styles.module.css';

import doneImage from "../../assets/images/Done.png";
import check from "../../assets/images/ckeck.png";

import VacancyCard from '../../shared/components/VacancyCard';
import HeaderLogado from '../../shared/components/HeaderLogado/Index';
import VacancyCardDetailed from '../../shared/components/VacancyCardDetailed';
import Modal from '../../shared/components/ModalResult/ModalResult';

export default function JobsEncerrados() {

  const navigate = useNavigate();
  const {register, handleSubmit} = useForm();


  const [isVacancySelected, setIsVacancySelected] = useState(false);

  const [vacancies, setVacancies] = useState([
    {
      "senioridade": 'SENIOR',
      "stack": "FRONTEND",
      "salary": 2000.00,
      "company": "Klein - Greenfelder",
      "title": "Forward Program Technician",
      "description": "Desenvolvimento e manutenção de aplicações mobile; Definição de padrões e colaboração em resolução de problemas; Garantir a qualidade do código, organização e automação, além da performance, qualidade e responsividade das aplicações; Realizar a publicação de APP Mobile nas lojas Apple Store e Google Play.",
      "id": 1
     },
     {
      "senioridade": 'SENIOR',
      "stack": "FRONTEND",
      "company": "Strosin and Sons",
      "title": "Human Program Supervisor",
      "description": "jorge",
      "id": 2
     },
     {
      "senioridade": 'PLENO',
      "stack": "BACKEND",
      "company": "Bergstrom - Conn",
      "title": "Investor Accounts Specialist",
      "description": "Desenvolvimento e manutenção de aplicações mobile; Definição de padrões e colaboração em resolução de problemas; Garantir a qualidade do código, organização e automação, além da performance, qualidade e responsividade das aplicações; Realizar a publicação de APP Mobile nas lojas Apple Store e Google Play.",
      "id": 3
     },
     {
      "senioridade": 'PLENO',
      "stack": "BACKEND",
      "company": "Kiehn, Adams and Hauck",
      "title": "Chief Infrastructure Architect",
      "description": "Desenvolvimento e manutenção de aplicações mobile; Definição de padrões e colaboração em resolução de problemas; Garantir a qualidade do código, organização e automação, além da performance, qualidade e responsividade das aplicações; Realizar a publicação de APP Mobile nas lojas Apple Store e Google Play.",
      "id": 4
     },
     {
      "senioridade": 'JUNIOR',
      "stack": "DEVOPS",
      "salary": 2000.00,
      "company": "Bernier, Auer and Koss",
      "title": "Future Assurance Coordinator",
      "description": "Desenvolvimento e manutenção de aplicações mobile; Definição de padrões e colaboração em resolução de problemas; Garantir a qualidade do código, organização e automação, além da performance, qualidade e responsividade das aplicações; Realizar a publicação de APP Mobile nas lojas Apple Store e Google Play.",
      "id": 5
    },
    {
      "senioridade": 'JUNIOR',
      "stack": "DEVOPS",
      "salary": 2000.00,
      "company": "Bernier, Auer and Koss",
      "title": "Future Assurance Coordinator",
      "description": "Desenvolvimento e manutenção de aplicações mobile; Definição de padrões e colaboração em resolução de problemas; Garantir a qualidade do código, organização e automação, além da performance, qualidade e responsividade das aplicações; Realizar a publicação de APP Mobile nas lojas Apple Store e Google Play.",
      "id": 6
    }
  ]);
  
  const [isModalSuccessVisible, setIsModalSuccessVisible] = useState(false);
  const [isRateModalVisible, setisRateModalVisible] = useState(false);
  
  const [senioridade, setSenioridade] = useState("");
  const [stack, setStack] = useState("");
  const [salary, setSalary] = useState(-1);
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(-1);

  const [rating, setRating] = useState(0);


  const Star = <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />

  const starStyles = {
    itemShapes: Star,
    itemStrokeWidth: 2,
    activeFillColor: '#00B37E',
    activeStrokeColor: '#00B37E',
    inactiveFillColor: '#121214',
    inactiveStrokeColor: '#00B37E'
}

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

  const rateCompany = () => {
    setisRateModalVisible(true);
  }

  
  const submitRateCompany = async (e : any) => {
    console.log(e);
    alert(rating);
    setisRateModalVisible(false);
    setIsModalSuccessVisible(true);
    setTimeout(() => {
        setIsModalSuccessVisible(false);
        navigate("/menu-dev");
      }, 5000);
  }

  const buttonCard = (senioridade: string, stack: string, title: string, company: string, description: string, id: number, salary?: number ) => {
    return (
      <button onClick={() => selectCard(senioridade, stack, title, company, description, id, salary)} className={styles.button}>
        <img src={check} alt="check" />
      </button>
    )
  };

  const buttonCardDetailed = (
      <button onClick={() => rateCompany()} className={styles.buttonCardDetailed}>
        AVALIAR CONTRATANTE
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

  const RateVacancyModal = () => {
  
    return (
      <div className={styles.modal}>
          <div className={styles.containerModal}>
              <div className={styles.content}>
                  <span className={styles.title}>Avaliar Contratante</span>
                  <form className={styles.form}  onSubmit={handleSubmit(submitRateCompany)}>
                      <div className={styles.labelInput}>
                          <label>Conte-nos brevemente como foi sua relação com o contratante:</label>
                          <Rating 
                            style={{ maxWidth: 250 }} 
                            value={rating} 
                            onChange={setRating} 
                            itemStyles={starStyles}
                            />
                          <label>Comentario:</label>
                          <input type="text" className={styles.input} {...register("comentario")}/>
                      </div>
                      <button className={styles.buttonModal}>
                        AVALIAR
                      </button>
                  </form>
              </div>
          </div>
      </div>
    )
  }
  

  const textModal = "Obrigado por avaliar o contratante! Você será redirecoinado para o menu principal";
    
  return (
    <>
      <HeaderLogado isDevOrCompany={"dev"}/>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.titleLeft}>
            Aqui estão seus jobs encerrados:
          </div>
          <div className={styles.cardsContainer}>
            {
            vacancies.map((vaga) => (
              <>
                <VacancyCard
                  id={vaga.id}
                  stack={vaga.stack}
                  senioridade={vaga.senioridade}
                  company={vaga.company}
                  salary={vaga.salary}
                  title={vaga.title}
                  button={buttonCard( 
                    vaga.senioridade,
                    vaga.stack,
                    vaga.title,
                    vaga.company,
                    vaga.description,
                    vaga.id,
                    vaga.salary,
                  )}
                  description={vaga.description}
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
            <img src={doneImage} alt="Job offer" />
          )}
        </div>
        {isModalSuccessVisible && <Modal title={"Contratante Avaliado!"} text={textModal} />}
        {isRateModalVisible && <RateVacancyModal />}
      </div>
    </>
  )
}

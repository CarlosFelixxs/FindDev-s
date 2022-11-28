import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';

import vagaImg from "../../assets/images/Hiring-cuate 1.png";
import close from "../../assets/images/x-close.png";

import VacancyCard from '../../shared/components/VacancyCard';
import HeaderLogado from '../../shared/components/HeaderLogado/Index';
import VacancyCardDetailed from '../../shared/components/VacancyCardDetailed';
import Modal from '../../shared/components/ModalResult/ModalResult';

export default function CompanyPublichedVacancy() {

  const navigate = useNavigate();

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
    setIsModalVisible(true);
    setTimeout(() => {
        setIsModalVisible(false);
        navigate("/menu-company");
    }, 4000);
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
            <img src={vagaImg} alt="Job offer" />
          )}
        </div>
        {isModalVisible && <Modal title={"Vaga cancelada!"} text={textModal} />}
      </div>
    </>
  )
}

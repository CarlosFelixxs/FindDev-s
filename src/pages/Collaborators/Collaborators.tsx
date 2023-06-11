import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'

import styles from './styles.module.css';

import equipe from "../../assets/images/equipe.png";
import close from "../../assets/images/x-close.png";

import CollaboratorCard from '../../shared/components/CollaboratorCard';
import HeaderLogado from '../../shared/components/HeaderLogado/Index';
import CollaboratorCardDetailed from '../../shared/components/CollaboratorCardDetailed';
import Modal from '../../shared/components/ModalResult/ModalResult';
import api from '../../services/api';

export default function Colaborators() {

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [isVacancySelected, setIsVacancySelected] = useState(false);

  const [vacancies, setVacancies] = useState([
    {
      "senioridade": 'SENIOR',
      "stack": "FRONTEND",
      "salary": 2000.00,
      "company": "Klein - Greenfelder",
      "title": "Forward Program Technician",
      "devName": "Josias",
      "description": "Desenvolvimento e manutenção de aplicações mobile; Definição de padrões e colaboração em resolução de problemas; Garantir a qualidade do código, organização e automação, além da performance, qualidade e responsividade das aplicações; Realizar a publicação de APP Mobile nas lojas Apple Store e Google Play.",
      "id": 1
    },
  ]);

  const [isRateModalVisible, setIsRateModalVisible] = useState(false);
  const [isModalSuccessVisible, setIsModalSuccessVisible] = useState(false);

  const [senioridade, setSenioridade] = useState("");
  const [stack, setStack] = useState("");
  const [salary, setSalary] = useState(-1);
  const [nomeDev, setNomeDev] = useState("");
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

  useEffect(() => {
    api.get(`/vagas/empresa/${sessionStorage.getItem("idUser")}`)
    .then((resposta) => {
      const data = resposta.data;

      const vagas = data.map((vaga: any) => {
        const objVaga = vaga;
        return {
          senioridade: objVaga.senioridade,
          funcao: objVaga.funcao,
          titulo: objVaga.titulo,
          descricao: objVaga.descricao,
          desenvolvedor: objVaga.desenvolvedor.nome,
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

}, [vacancies]);

  const selectCard = (senioridade: string, stack: string, title: string, nomeDev: string, description: string, id: number, salary?: number) => {
    setIsVacancySelected(true);
    setSenioridade(senioridade);
    setStack(stack);
    setTitle(title);
    setNomeDev(nomeDev);
    setDescription(description);
    setId(id);
    salary ? setSalary(salary) : setSalary(-1);
  };

  const rateDeveloper = () => {
    setIsRateModalVisible(true);
  }

  const submitRateCompany = async (e: any) => {
    console.log(e);
    setIsRateModalVisible(false);
    setIsModalSuccessVisible(true);
    setTimeout(() => {
      setIsModalSuccessVisible(false);
      navigate("/menu-company");
    }, 5000);
  }

  const RateVacancyModal = () => {
    return (
      <div className={styles.modal}>
        <div className={styles.containerModal}>
          <div className={styles.content}>
            <span className={styles.title}>Avaliar Contratante</span>
            <form className={styles.form} onSubmit={handleSubmit(submitRateCompany)}>
              <div className={styles.labelInput}>
                <label>Conte-nos brevemente como foi sua relação com o contratante:</label>
                <Rating
                  style={{ maxWidth: 250 }}
                  value={rating}
                  onChange={setRating}
                  itemStyles={starStyles}
                />
                <label>Comentario:</label>
                <input type="text" className={styles.input} {...register("comentario")} />
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

  const buttonCard = (senioridade: string, stack: string, title: string, nomeDev: string, description: string, id: number, salary?: number) => {
    return (
      <button onClick={() => selectCard(senioridade, stack, title, nomeDev, description, id, salary)} className={styles.button}>
        <img src={close} alt="check" />
      </button>
    )
  };

  const buttonCardDetailed = (
    <button onClick={() => rateDeveloper()} className={styles.buttonCardDetailed}>
      ENCERRAR CONTRATO
    </button>
  )

  const showVacancySelected = () => {
    if (id !== -1) {
      return (
        <CollaboratorCardDetailed
          id={id}
          senioridade={senioridade}
          stack={stack}
          salary={salary}
          nomeDev={nomeDev}
          title={title}
          description={description}
          button={buttonCardDetailed}
        />
      )
    }
  }


  const textModal = "Você será redirecoinado para o menu principal";

  return (
    <>
      <HeaderLogado isDevOrCompany={"company"}/>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.titleLeft}>
            Aqui estão seus colaboradores.
          </div>
          <div className={styles.cardsContainer}>
            {
              vacancies.map((vaga) => (
                <>
                  <CollaboratorCard
                    id={vaga.id}
                    stack={vaga.stack}
                    title={vaga.title}
                    button={buttonCard(
                      vaga.senioridade,
                      vaga.stack,
                      vaga.title,
                      vaga.devName,
                      vaga.description,
                      vaga.id,
                      vaga.salary,
                    )}
                    devName={vaga.devName}
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
          ) : (
            <img src={equipe} alt="Job offer" />
          )}
        </div>
        {isModalSuccessVisible && <Modal title={"Desenvolvedor Avaliado!"} text={textModal} />}
        {isRateModalVisible && <RateVacancyModal />}
      </div>
    </>
  )
}

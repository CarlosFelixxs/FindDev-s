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

  const idEmpresa = sessionStorage.getItem('idUser');

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [isVacancySelected, setIsVacancySelected] = useState(false);

  const [vacancies, setVacancies] = useState([
    {
      "senioridade": 'senior',
      "stack": "FRONTEND",
      "title": "Desenvolvedor Front-end",
      "devName": "Roberto",
      "description":"Vaga para desenvolvedor front-end",
      "id": "2",
      "idVaga": 2,
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
  const [id, setId] = useState("-1");
  const [idVaga, setIdVaga] = useState(-1);

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
      let vagas = [];

      for (let i = 0; i < data.length; i++) {
        const vaga = data[i];
      
        if (!vaga.encerrado && !vaga.avaliado && vaga.desenvolvedor) {
          const objetoVaga = {
            idVaga: vaga.id,
            title: vaga.titulo,
            description: vaga.descricao,
            stack: vaga.funcao,
            senioridade: vaga.senioridade,
            encerrado: vaga.encerrado,
            avaliado: vaga.avaliado,
            id: vaga.desenvolvedor ? vaga.desenvolvedor.id : null,
            devName: vaga.desenvolvedor ? vaga.desenvolvedor.nome : null,
          };
          vagas.push(objetoVaga);
        }
      }

      
      setVacancies(vagas);
      console.log(vacancies);
    }).catch((error) => {
      console.log(error)
    });

}, []);

const selectCard = (senioridade: string, stack: string,description: string,title: string, nomeDev: string, id: string, idVaga: number,) => {
  setIsVacancySelected(true);
  setSenioridade(senioridade);
  setStack(stack);
  setTitle(title);
  setNomeDev(nomeDev);
  setId(id);
  setIdVaga(idVaga)
  setDescription(description);
};

  const rateDeveloper = () => {
    setIsRateModalVisible(true);
  }

  const submitRateCompany = async (idAvaliador: string | null, idAvaliado: string, nota: number, isCompany: boolean) => {

    const url = '/avaliacoes';
    const corpoRequisicao = {
      idAvaliador: idAvaliador, // ID do avaliador
      idAvaliado: idAvaliado, // ID do avaliado
      nota: nota, // Nota da avaliação
      isCompany: true // Indica se é uma avaliação da empresa
    };

  api.post(url, corpoRequisicao)
    .then(response => {
      console.log('Requisição POST enviada com sucesso!');
      console.log('Resposta:', response.data);
  })
    .catch(error => {
      console.error('Ocorreu um erro ao enviar a requisição POST:', error);
  });

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
            <div className={styles.form} >
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
              <button className={styles.buttonModal} onClick={() => submitRateCompany(idEmpresa, id, 4, true)}>
                AVALIAR
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const buttonCard = (senioridade: string, stack: string, title: string, nomeDev: string, description:string, id: string, idVaga: number) => {
    return (
      <button onClick={() => selectCard(senioridade, stack, title, nomeDev, description, id, idVaga)} className={styles.button}>
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
    if (id !== "-1") {
      return (
        <CollaboratorCardDetailed
          id={id}
          senioridade={senioridade}
          stack={stack}
          salary={-1}
          nomeDev={nomeDev}
          title={title}
          description={description}
          idVaga={idVaga}
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
                    devName={vaga.devName}
                    stack={vaga.stack}
                    title={vaga.title}
                    button={buttonCard(
                      vaga.senioridade,
                      vaga.stack,
                      vaga.title,
                      vaga.devName,
                      vaga.description,
                      vaga.id,
                      vaga.idVaga,
                    )}
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

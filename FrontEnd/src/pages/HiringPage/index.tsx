import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'

import styles from './styles.module.css';

import equipe from "../../assets/images/equipe.png";
import close from "../../assets/images/check.png";

import HeaderLogado from '../../shared/components/HeaderLogado/Index';
import Modal from '../../shared/components/ModalResult/ModalResult';
import HiringCard from '../../shared/components/HiringCard';
import HiringCardDetailed from '../../shared/components/HiringCardDetailed';
import api from '../../services/api';

export default function HiringPage() {

  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [isVacancySelected, setIsVacancySelected] = useState(false);

  const [vacancies, setVacancies] = useState([
    {
      "senioridade": '',
      "stack": "",
      "company": "",
      "title": "",
      "devName": "",
      "email": "",
      "telefone": "",
      "id": "-2",
      "idVaga": -2
    },
  ]);

  useEffect(() => {
    api.get(`/vagas/empresa/${sessionStorage.getItem("idUser")}`)
    .then((resposta) => {
      let data = resposta.data;

      let vagas = []

      for (let i = 0; i < data.length; i++) {
        const vaga = data[i];

        for (let j = 0; j < vaga.candidaturas.length; j++) {
          const candidatura = vaga.candidaturas[j];
          if (vaga.idVaga >= 0) {
            vagas.push({
              senioridade: vaga.senioridade,
              stack: vaga.funcao,
              company: '',
              title: vaga.titulo,
              devName: candidatura.desenvolvedor.nome,
              email: candidatura.desenvolvedor.email,
              telefone: candidatura.desenvolvedor.telefone,
              id: vaga.desenvolvedor.id,
              idVaga: vaga.id
            });
          }
        }
      }

      
      setVacancies(vagas);
      console.log(vacancies);
    }).catch((error) => {
      console.log(error)
    });

}, []);

  const [isModalSuccessVisible, setIsModalSuccessVisible] = useState(false);

  const [senioridade, setSenioridade] = useState("");
  const [stack, setStack] = useState("");
  const [salary, setSalary] = useState(-1);
  const [nomeDev, setNomeDev] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [id, setId] = useState("-1");
  const [idVaga, setIdVaga] = useState(-1);

  const selectCard = (senioridade: string, stack: string, title: string, nomeDev: string, telefone:string, email:string, id: string, idVaga: number, salary?: number) => {
    setIsVacancySelected(true);
    setSenioridade(senioridade);
    setStack(stack);
    setTitle(title);
    setNomeDev(nomeDev);
    setEmail(email);
    setTelefone(telefone)
    setId(id);
    setIdVaga(idVaga)
    salary ? setSalary(salary) : setSalary(-1);
  };

  const contratar = (id: string, idVaga: number) => {
    const corpoRequisicao = {
      idVaga: idVaga, // ID da vaga
      idDev: id // ID do desenvolvedor
    };
    
    api.patch("/vagas/contratacao", corpoRequisicao)
      .then(response => {
        console.log('Contratação com sucesso!');
        console.log('Resposta:', response.data);
        setIsModalSuccessVisible(true);
        setTimeout(() => {
          setIsModalSuccessVisible(false);
          navigate("/menu-company");
        }, 5000);
      })
      .catch(error => {
        console.error('Ocorreu um erro ao enviar a requisição PATCH:', error);
      });
  }


  const buttonCard = (senioridade: string, stack: string, title: string, nomeDev: string, telefone:string, email:string, id: string, idVaga: number, salary?: number) => {
    return (
      <button onClick={() => selectCard(senioridade, stack, title, nomeDev, telefone, email, id, idVaga)} className={styles.button}>
        <img src={close} alt="check" />
      </button>
    )
  };

  const buttonCardDetailed = (
    <button onClick={() => contratar(id, idVaga)} className={styles.buttonCardDetailed}>
      CONTRATAR
    </button>
  )

  const showVacancySelected = () => {
    if (id !== "-1") {
      return (
        <HiringCardDetailed
          id={id}
          idVaga={idVaga}
          senioridade={senioridade}
          stack={stack}
          salary={salary}
          nomeDev={nomeDev}
          title={title}
          email={email}
          telefone={telefone}
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
            Aqui estão seus candidatos.
          </div>
          <div className={styles.cardsContainer}>
            {
              vacancies.map((vaga) => (
                <>
                  <HiringCard
                    id={vaga.id}
                    idVaga={vaga.idVaga}
                    devName={vaga.devName}
                    stack={vaga.stack}
                    title={vaga.title}
                    button={buttonCard(
                      vaga.senioridade,
                      vaga.stack,
                      vaga.title,
                      vaga.devName,
                      vaga.email,
                      vaga.telefone,
                      vaga.id,
                      vaga.idVaga,
                    )}
                    key={vaga.id}
                    senioridade={vaga.senioridade}
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
        {isModalSuccessVisible && <Modal title={"Desenvolvedor contratado!"} text={textModal} />}
      </div>
    </>
  )
}

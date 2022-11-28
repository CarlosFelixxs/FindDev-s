import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import HeaderLogado from '../../shared/components/HeaderLogado/Index';

import Modal from '../../shared/components/ModalResult/ModalResult';

import styles from './styles.module.css';

export default function FormVacancy() {

    const navigate = useNavigate();
    const {register, handleSubmit} = useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [vacancy, setVacancy] = useState(
        {
            "id_empresa": `${sessionStorage.getItem("idUser")}`,
            "descricao": "",
            "funcao": "",
            "senioridade": "",
            "titulo": ""
        }
    )

    const onSubmitVacancy = async (e : any) => {
        console.log(e);
        setVacancy({
            ...vacancy,
                descricao: vacancy.descricao = e.descricao,
                funcao: vacancy.funcao = e.frente,
                senioridade: vacancy.senioridade = e.senioridade,
                titulo: vacancy.titulo = e.titulo,
        });

        await api.post('/vagas', vacancy)
            .then((resposta) => {
                console.log(resposta);
                setIsModalVisible(true);
                setTimeout(() => {
                    setIsModalVisible(false);
                    navigate("/menu-company");
                }, 5000);
            })
            .catch((error) => {
                alert("erro")
                console.log(error);
            });
    }

    const textModal = "Você acaba de anunciar uma vaga! Consulte as vagas abertas para ver os desenvolvedores interessados na sua vaga! Redirecionando para o menu inicial.";

  return (
    <>
        <HeaderLogado />
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>DETALHES DA VAGA</h1>
                <form className={styles.form} onSubmit={handleSubmit(onSubmitVacancy)}>
                    <div className={styles.inputsGroupForm}>
                        <div className={styles.inputsLeft}>

                            <div className={styles.labelInput}>
                                <label>TITULO DA VAGA</label>
                                <input type="text" className={styles.input} {...register("titulo")}/>
                            </div>
                            
                            <div className={styles.labelInput}>
                            <label htmlFor="senioridade">SENIORIDADE</label>
                            <select className={styles.input} id="senioridade" {...register("senioridade")}>
                                <option value="" selected disabled></option>
                                <option>Junior</option>
                                <option>Pleno</option>
                                <option>Senior</option>
                            </select>
                            </div>

                            <div className={styles.labelInput}>
                            <label htmlFor="frente">Frente</label>
                            <select className={styles.input} id="frente" {...register("frente")}>
                                <option value="" selected disabled></option>
                                <option>Front-End</option>
                                <option>Back-End</option>
                                <option>DevOps</option>
                            </select>
                            </div>

                        </div>

                        <div className={styles.leabelTextArea}>
                            <label>DESCRIÇÃO</label>
                            <textarea className={styles.textArea} {...register("descricao")}/>
                        </div>
                    </div>
                    <input type="submit" value="PUBLICAR" className={styles.submit}/>
                </form>
            </div>  
            {isModalVisible && <Modal title={"Parabéns!"} text={textModal} path={"/menu-company"}/>}
        </div>  
    </>
  )
}
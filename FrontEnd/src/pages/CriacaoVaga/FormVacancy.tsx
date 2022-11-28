import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import HeaderLogado from '../../shared/components/HeaderLogado/Index';
import Modal from '../../shared/components/ModalResult/ModalResult';
import api from '../../services/api';

import styles from './styles.module.css';

interface FormVacancyProps {
    titulo: string;
    senioridade: string;
    frente:string,
    descricao: string,
}

const formSchema = yup.object({
    titulo: yup.string().max(45, "O título deve conter no maximo 45 caractéres").required("O título da vaga é obrigatório"),
    senioridade: yup.string().required("Senioridade da vaga obrigatória"),
    frente: yup.string().required("Frente de desenvolvimento obrigatória"),
    descricao: yup.string().max(250, "A sua descrição deve conter até 250 caracteres").required("A descrição da vaga é obrigatória"),
})

export default function FormVacancy() {

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormVacancyProps>({
        resolver: yupResolver(formSchema)
    });

    const [isModalVisible, setIsModalVisible] = useState(false);

    let vacancy = 
        {
            "id_empresa": `${sessionStorage.getItem("idUser")}`,
            "descricao": "",
            "funcao": "",
            "senioridade": "",
            "titulo": ""
        }

    const onSubmitVacancy = async (e : FormVacancyProps) => {

        vacancy = {
            "id_empresa": `${sessionStorage.getItem("idUser")}`,
            "titulo": `${e.titulo}`,
            "descricao": `${e.descricao}`,
            "funcao": `${e.frente.toUpperCase()}`,
            "senioridade": `${e.senioridade.toUpperCase()}`,
        }
        
        console.log(vacancy);

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
                                <input type="text" className={errors.titulo ? styles.inputError : styles.input} {...register("titulo")}/>
                                {errors.titulo && <p> {errors.titulo.message} </p>}
                            </div>
                            
                            <div className={styles.labelInput}>
                            <label htmlFor="senioridade">SENIORIDADE</label>
                            <select className={errors.titulo ? styles.inputError : styles.input} id="senioridade" {...register("senioridade")}>
                                <option value="" selected disabled></option>
                                <option>Junior</option>
                                <option>Pleno</option>
                                <option>Senior</option>
                            </select>
                                {errors.senioridade && <p> {errors.senioridade.message} </p>}
                            </div>

                            <div className={styles.labelInput}>
                            <label htmlFor="frente">Frente</label>
                            <select className={errors.titulo ? styles.inputError : styles.input} id="frente" {...register("frente")}>
                                <option value="" selected disabled></option>
                                <option>FrontEnd</option>
                                <option>BackEnd</option>
                                <option>DevOps</option>
                            </select>
                                {errors.frente && <p> {errors.frente.message} </p>}
                            </div>

                        </div>

                        <div className={styles.leabelTextArea}>
                            <label>DESCRIÇÃO</label>
                            <textarea className={errors.titulo ? styles.textAreaError : styles.textArea} {...register("descricao")}/>
                            {errors.descricao && <p> {errors.descricao.message} </p>}
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
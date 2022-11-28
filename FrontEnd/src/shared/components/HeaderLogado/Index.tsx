import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';
import Logo from "../../../assets/images/Logo.png";
import Voltar from "../../../assets/images/arrow-left.png";
import api from '../../../services/api';


export default function HeaderLogado() {

    const routeChanger = (path: string) => {
      navigate(path);
    }

    const [nome, setNome] = useState("");

    const navigate = useNavigate();


    useEffect(() => {
        api.get(`/empresa/${sessionStorage.getItem("idUser")}`)
        .then((resposta) => {
            setNome(resposta.data.nome)
        })
        .catch((error) => {
            console.log(error)
        });
    
    }, [])

    useEffect(() => {
        api.get(`/dev/${sessionStorage.getItem("idUser")}`)
        .then((resposta) => {
            setNome(resposta.data.nome)
        })
        .catch((error) => {
            console.log(error)
        });
    
    }, [])
    

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <img onClick={() => routeChanger("/")} className={styles.image} src={Logo} alt="logo do site" />
            <div className={styles.nome}>Bem vindo, {nome}</div>
        </div>
    </div>
  )
}

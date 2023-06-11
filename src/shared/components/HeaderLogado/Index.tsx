import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';
import Logo from "../../../assets/images/Logo.png";
import api from '../../../services/api';

type HeaderProps = {
    isDevOrCompany: string;
}


export default function HeaderLogado({isDevOrCompany} : HeaderProps) {

    const routeChanger = (path: string) => {
      navigate(path);
    }

    const [nome, setNome] = useState("");

    const navigate = useNavigate();


    const path = isDevOrCompany === "dev" ? "/menu-dev" : "/menu-company";

    useEffect(() => {
        api.get(`/${isDevOrCompany === "dev" ? "dev" : "empresa"}/${sessionStorage.getItem("idUser")}`)
        .then((resposta) => {
            setNome(resposta.data.nome)
        })
        .catch((error) => {
            console.log(error)
        });
    
    }, [isDevOrCompany])
    

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <img  className={styles.image} src={Logo} onClick={() => routeChanger(path)} alt="logo do site" />
            <div className={styles.nome}>Bem vindo, {nome}</div>
        </div>
    </div>
  )
}

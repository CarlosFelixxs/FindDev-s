import React from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';
import Logo from "../../../assets/images/Logo.png";

type TypesHeader = {
    nome: string;
}

export default function HeaderLogado({nome}: TypesHeader) {

    const navigate = useNavigate();

    const routeChange = (path: string) => {
        navigate(path);
    }

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <img onClick={() => routeChange("/menuCompany")} className={styles.image} src={Logo} alt="logo do site" />
            <div className={styles.nome}>Olá, {nome}</div>
        </div>
    </div>
  )
}

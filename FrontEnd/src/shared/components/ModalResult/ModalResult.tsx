import React from 'react'
import { useNavigate  } from 'react-router-dom';

import styles from './styles.module.css';

import CheckCircle from "../../../assets/images/CheckCircle.png";

type ModalTypes = {
    title : string;
    text : string;
    path: string;
}

export default function Modal({title, text, path}: ModalTypes) {

  const navigate = useNavigate();

  const routeChange = () =>{ 
    navigate(path);
  }

  return (
    <div className={styles.modal} onClick={routeChange}>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{text}</div>
                <img src={CheckCircle} alt="Check Circle" />
            </div>
        </div>
    </div>
  )
}

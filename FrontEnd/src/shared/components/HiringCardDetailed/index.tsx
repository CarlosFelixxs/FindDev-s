import React from 'react';
import api from '../../../services/api';

import styles from './styles.module.css';

type HiringCardTypes = {
  stack: string,
  senioridade: string,
  nomeDev: string,
  title: string,
  email: string,
  telefone: string,
  salary?: number,
  button: JSX.Element|JSX.Element[],
  id: string,
  idVaga: number
}
export default function VacancyCardDetailed({stack, senioridade, nomeDev, title, salary, email, button, telefone, idVaga} : HiringCardTypes) {

  return (
    <div className={styles.card}>
      <div className={styles.topicContent}>
        <span className={styles.title}>{title}</span>
        <div className={styles.topics}>
          <span className={styles.nomeDev}>{nomeDev}</span>
          <div className={styles.stackSenioridade}>
            <span>{stack}</span>
            <span>{senioridade}</span>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.titleDescription}>
          Detalhes do candidato:
        </div>
        <div className={styles.textDescription}>
          Email: {email}
        </div>
        <div className={styles.textDescription}>
          Telefone: {telefone}
        </div>
      </div>
      {button}
    </div>
  )
}

import React from 'react';

import styles from './styles.module.css';

type VacancyCardTypes = {
  stack: string,
  senioridade: string,
  nomeDev: string,
  title: string,
  description: string,
  salary?: number,
  button: JSX.Element|JSX.Element[],
  id: string,
  idVaga:number
}

export default function VacancyCardDetailed({stack, senioridade, nomeDev, title, salary,description, button} : VacancyCardTypes) {

  return (
    <div className={styles.card}>
      <div className={styles.topicContent}>
        <span className={styles.title}>{description}</span>
        <div className={styles.topics}>
          <span className={styles.nomeDev}>{title}</span>
          <div className={styles.stackSenioridade}>
            <span>{stack}</span>
            <span>{senioridade}</span>
          </div>
          {salary !== -1 ? (
            <div>
              Remuneração:
              <span>{salary}</span>
            </div>
          ): null}
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.titleDescription}>
          Detalhes da vaga:
        </div>
        <div className={styles.textDescription}>
          {nomeDev}
        </div>
      </div>
      {button}
    </div>
  )
}

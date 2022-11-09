import React from 'react';

import styles from './styles.module.css';

type VacancyCardTypes = {
  stack: string,
  senioridade: string,
  company: string,
  title: string,
  description: string,
  salary?: number,
  button: JSX.Element|JSX.Element[],
  id: number,
}

export default function VacancyCardDetailed({stack, senioridade, company, title, salary,description, button} : VacancyCardTypes) {

  return (
    <div className={styles.card}>
      <div className={styles.topicContent}>
        <span className={styles.title}>{title}</span>
        <div className={styles.topics}>
          <span className={styles.company}>{company}</span>
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
          {description}
        </div>
      </div>
      {button}
    </div>
  )
}

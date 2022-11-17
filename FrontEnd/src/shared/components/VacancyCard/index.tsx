import React from 'react';

import styles from './styles.module.css';

import backendStack from "../../../assets/images/backendStack.png";
import devOpsStack from "../../../assets/images/devopsStack.png";
import frontEndStack from "../../../assets/images/FrontEndStack.png";

type VacancyCardTypes = {
  id: number,
  stack: string,
  senioridade: string,
  company: string,
  title: string,
  salary?: number,
  button: JSX.Element|JSX.Element[],
  description: string
}

export default function VacancyCard({stack, senioridade, company, title, salary, id, button} : VacancyCardTypes) {

  const imageStack = () => {
    if (stack === "DEVOPS") {
      return devOpsStack
    }else if (stack === "FRONTEND") {
      return frontEndStack
    }else{
      return backendStack
    }
  }

  return (
    <>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.imageCardContainer}>
            <img src={imageStack()} alt="" />
          </div>
          <div className={styles.details}>
            <span className={styles.title}>{title}</span>
            <span className={styles.companyName}>{company}</span>
            {salary && <span className={styles.salary}>Remuneração: R$ {salary}</span>}
            <div className={styles.stackSenioridade}>
              <div className={styles.stack}>{stack}</div>
              <div className={styles.senioridade}>{senioridade}</div>
            </div>
          </div>
        </div>
        {button}
      </div>   
    </>
  )
}

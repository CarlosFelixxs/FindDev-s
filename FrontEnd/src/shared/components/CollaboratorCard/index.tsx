import React from 'react';

import styles from './styles.module.css';

import backendStack from "../../../assets/images/backendStack.png";
import devOpsStack from "../../../assets/images/devopsStack.png";
import frontEndStack from "../../../assets/images/FrontEndStack.png";

type VacancyCardTypes = {
  id: string,
  stack: string,
  title: string,
  button: JSX.Element|JSX.Element[],
  devName: string,
}

export default function VacancyCard({stack, title, id, devName, button} : VacancyCardTypes) {

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
            <div className={styles.title}>{devName}</div>
            <span className={styles.devName}>{title}</span>
          </div>
        </div>
        {button}
      </div>   
    </>
  )
}

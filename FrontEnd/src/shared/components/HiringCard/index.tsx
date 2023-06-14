import React from 'react';

import styles from './styles.module.css';

import backendStack from "../../../assets/images/backendStack.png";
import devOpsStack from "../../../assets/images/devopsStack.png";
import frontEndStack from "../../../assets/images/FrontEndStack.png";

type HiringCardTypes = {
  id: string,
  idVaga: number,
  stack: string,
  senioridade: string,
  title: string,
  button: JSX.Element | JSX.Element[],
  devName: string,
}

export default function HiringCard({ stack, senioridade, title, id, devName, button, idVaga }: HiringCardTypes) {

  return (
    <>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.details}>
            <span className={styles.title}>{title}</span>
            <div className={styles.devName}>{devName}</div>
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

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';

import { Header } from '../../shared/components/Header';
import Form from './Form';

import signupImage from "../../assets/images/signup-img.png";
import FinalSignupImage from "../../assets/images/final-image-banner-signup.png";

export default function Cadastro() {

  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [userType, setUserType] = useState<"" | "company" | "dev">("");

  const classNameCardSignUp = () => {
    if (step === 3 && userType === "company") {
      return styles.cardSignupStep3;
    }
    return styles.cardSignup;
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const routeChange = (path: string) => {
    navigate(path);
  }

  const beginOrEndForm = () => {
    if (step === 0) {
      return (
        <div className={styles.left}>
          <div className={styles.text}>
            <p> OLÁ, BEM VINDO! <br />
              JÁ POSSUI UMA CONTA?</p>
            <span onClick={() => routeChange("/login")}>
              REALIZE SEU LOGIN
            </span>
          </div>
          <div className={styles.contImg}>
            <img src={signupImage} alt="imagem do banner" />
          </div>
        </div>
      )
    } else if (step === 4) {
      return (
        <div className={styles.left}>
          <div className={styles.image}>
            <img src={FinalSignupImage} alt="imagem do banner" />
          </div>
        </div>
      )
    }
  }

  const button = (
    step === 1 ? (
      <>
          <div
            onClick={() => {
              setStep(step + 1);
              setUserType("company");
            }}
            className={styles.selectionEmpresa}>
            EMPRESA
          </div>
          <div
            onClick={() => {
              setStep(step + 1);
              setUserType("dev");
            }}
            className={styles.selectionDev}>
            DESENVOLVEDOR
          </div>
      </>
    ) : (
      step === 4 ? (
        <button
          onClick={() => routeChange("/login")}
          className={styles.finalSubmit}>
          COMECE SUA JORNADA
        </button>
      ) : (
        <button
          onClick={
            () => {
              setTimeout(nextStep, 0.1);
            }}
          className={styles.submit}>
          CONTINUAR
        </button>
      )
    )
  );

  return (
    <>
      <Header isLoginScreen={false} isHomePage={false} />
      <section className={styles.cad}>
        <div className={styles.container}>
          {beginOrEndForm()}
        </div>
        <div className={styles.right}>
          <div className={classNameCardSignUp()}>
            <Form button={button} step={step} userType={userType} />
          </div>
        </div>
      </section>
    </>
  )
}
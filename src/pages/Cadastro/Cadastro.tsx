import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.css';

import { Header } from '../../shared/components/Header';
import Form from './Form';

import signupImage from "../../assets/images/signup-img.png";
import finalSignupImage from "../../assets/images/final-image-banner-signup.png";

export default function Cadastro() {

  const navigate = useNavigate();

  const [step, setStep] = useState(0);
// eslint-disable-next-line
  console.log(setStep)


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
            <img src={finalSignupImage} alt="imagem do banner" />
          </div>
        </div>
      )
    }
  }


  return (
    <>
      <Header isLoginScreen={false} isHomePage={false} />
      <section className={styles.cad}>
        <div className={styles.container}>
          {beginOrEndForm()}
        </div>
        <div className={styles.right}>
          <div className={styles.cardSignup}>
            <Form />
          </div>
        </div>
      </section>
    </>
  )
}
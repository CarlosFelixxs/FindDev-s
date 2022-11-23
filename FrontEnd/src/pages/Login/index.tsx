import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { Header } from '../../shared/components/Header';
import signupImage from "../../assets/images/signup-img.png";
import { useState } from 'react';

export default function Cadastro() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const objetoBack = {
    email
  }

  // if (objetoBack.email) {
    
  // } else {
  //   api.post("/", objetoBack)
  // }



  const routeChange = (path: string) => {
    navigate(path);
  }

  return (
    <>
      <Header isLoginScreen={true} isHomePage={false} />
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.text}>
            <div className={styles.title}>
              OLÁ, BEM VINDO DE VOLTA! <br />
              AINDA NÃO POSSUI UMA CONTA?
            </div>
            <div className={styles.subtitle} >
              REGISTRE-SE JÁ
            </div>
          </div>
          <div className={styles.contImage}>
            <img className={styles.image} src={signupImage} alt="imagem do banner" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.cardSignup}>
            <div className={styles.cardContent}>
              <h1>LOGIN</h1>
              <form className={styles.formSignup}>
                <div className={styles.labelInput}>
                  <label className={styles.titleInput} id ='input_email'>EMAIL</label> 
                  <div className={styles.separador}></div>
                  <input type="email" className={styles.input} placeholder="exemplo@email.com" />
                  <span></span>
                </div>
                <div className={styles.labelInput}>
                  <label className={styles.titleInput}>SENHA</label>
                  <div className={styles.separador}></div>
                  <input type="text" className={styles.input} placeholder="*************" />
                </div>
                <input type="Submit" value="CONTINUAR" className={styles.submit} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
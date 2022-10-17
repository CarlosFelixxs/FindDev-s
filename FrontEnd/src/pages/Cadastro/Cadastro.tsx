import { useNavigate  } from 'react-router-dom';

import styles from './styles.module.css';

import { Header } from '../../shared/components/Header';

import signupImage from "../../assets/images/signup-img.png";

export default function Cadastro() {

  const navigate = useNavigate();

  const routeChange = (path : string) =>{ 
    navigate(path);
  }

  return (
    <>
      <Header isLoginScreen={false} isHomePage={false}/>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.text}>
            <div className={styles.title}>
              OLÁ, BEM VINDO! <br />  
              JÁ POSSUI UMA CONTA?
            </div>
            <div className={styles.subtitle} onClick={() => routeChange("/login")}>
              REALIZE SEU LOGIN
            </div>
          </div>
          <div className={styles.image}>
            <img src={signupImage} alt="imagem do banner" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.cardSignup}>
            <div className={styles.cardContent}>
              <h1>CADASTRO</h1>
              <form className={styles.formSignup}>
                <div className={styles.leabelInput}>
                  <label>EMAIL</label>
                  <div className={styles.separador}></div>
                  <input type="text" className={styles.input} placeholder="exemplo@email.com"/>
                </div>
                <div className={styles.leabelInput}>
                  <label>SENHA</label>
                  <div className={styles.separador}></div>
                  <input type="text" className={styles.input} placeholder="*************"/>
                </div>
                <div className={styles.leabelInput}>
                  <label>CONFIRMAÇÃO DE SENHA</label>
                  <div className={styles.separador}></div>
                  <input type="text"className={styles.input} placeholder="*************"/>
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

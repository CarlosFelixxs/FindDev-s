import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { Header } from '../../shared/components/Header';
import signupImage from "../../assets/images/signup-img.png";
import { Footer } from "../../shared/components/Footer";


export default function Login() {

  const navigate = useNavigate();

  const routeChange = (path: string) => {
    navigate(path);
  }

  return (
    <>
      <Header isLoginScreen={true} isHomePage={false} />
      <section className={styles.container}>
        <div className={styles.contPartOne}>
          <div className={styles.contText}>
            <p>Olá, bem vindo de volta! <br />
              Ainda não possui uma conta? <br />
            </p>
            <span onClick={() => routeChange("/cadastro")}>
              registre-se
            </span>
          </div>
          <div className={styles.contImg}>
            <img src={signupImage} alt="imagem do banner" />
          </div>
        </div>
        <div className={styles.contPartTwo}>
          <div className={styles.contForm}>
            <p>login</p>
            <div className={styles.labelInput}>
              <label>EMAIL</label>
              <input type="text" placeholder="exemplo@email.com" />
            </div>
            <div className={styles.labelInput}>
              <label>SENHA</label>
              <input type="text" placeholder="*************" />
            </div>
            <input type="Submit" value="CONTINUAR" className={styles.submit} />
          </div>
        </div>
      </section>
    </>
  )
}

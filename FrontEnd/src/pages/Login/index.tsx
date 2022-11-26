import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { Header } from '../../shared/components/Header';
import signupImage from "../../assets/images/signup-img.png";
import { Footer } from "../../shared/components/Footer";

import { useForm } from 'react-hook-form';
// import { api, signIn } from '../../services/api';
import api from '../../services/api';


export default function Login() {

  const {
    register,
    handleSubmit,
} = useForm();

  const navigate = useNavigate();

  const routeChange = (path: string) => {
    navigate(path);
  }

  const onSubmit = async (e : any) => {
    console.log(e)
    const login = {
      "email": `${e.email}`,
      "senha": `${e.senha}`
    };

      api.post('/user/login', login)
      .then((resposta) => {
        alert("Funcionou");
        console.log(resposta);
        resposta.data.cnpj ? routeChange("/menu-company") : routeChange("/menu-dev");
      })
      .catch((error) => {
        alert("Email ou senha não existem");
        console.log(error)
      });
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
          <form className={styles.contForm} onSubmit={handleSubmit(onSubmit)}>
            <p>login</p>
            <div className={styles.labelInput}>
              <label>EMAIL</label>
              <input type="text" placeholder="exemplo@email.com" {...register("email")} />
            </div>
            <div className={styles.labelInput}>
              <label>SENHA</label>
              <input type="password" placeholder="*************" {...register("senha")}/>
            </div>
            <input type="Submit" value="CONTINUAR" className={styles.submit}  />
          </form>
        </div>
      </section>
    </>
  )
}

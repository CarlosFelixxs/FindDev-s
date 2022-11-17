import styles from './styles.module.css';
import Logo from "../../../assets/images/Logo.png";
import { useNavigate } from 'react-router-dom';

export function Header(props: any) {

  const navigate = useNavigate();

  const routeChange = () => {
    const path = props.isLoginScreen === true ? "/cadastro" : "/login";
    navigate(path);
  }

  const routeChanger = (path : string) => {
    navigate(path);
  }

  const styleContainer = () => {
    if (props.isHomePage) {
      return styles.containerHome;
    }
    return styles.container;
  }

  return (
    <>
      <header className={styleContainer()}>
        <img onClick={() => routeChanger("/")} className={styles.image} src={Logo} alt="logo do site" />
        {props.isHomePage && (
          <ul className={styles.nav}>
            <a href="#Inicio">INICIO</a>
            <a href="#sectionTopics">CONHEÇA</a>
            <a href="#sectionCards">COMO FUNCIONA</a>
            <a href="#sectionPlans">PLANOS</a>
          </ul>
        )
        }
        {props.isLoginScreen === true ? (
          <button
            id='button-cadastro-login-page'
            className={styles.btnCadastro}
            onClick={routeChange}
          >
            CADASTRO
          </button>
        ) : (
          <button
            id='button-login-home-page'
            className={styles.btnLogin}
            onClick={routeChange}
          >
            LOGIN
          </button>
        )
        }
      </header>
    </>
  )
} 
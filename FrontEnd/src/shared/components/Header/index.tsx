import styles from './styles.module.css';
import Logo from "../../../assets/images/Logo.png";
import { useNavigate  } from 'react-router-dom';

export function Header( props: any ) {

  const navigate = useNavigate();
  
  const routeChange = () =>{ 
    const path = props.isLoginScreen === true ? "/cadastro" : "/login";
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
        <img className={styles.image} src={Logo} alt="logo do site" />
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
              className={styles.btnCadastro}
              onClick={routeChange}
            >
              Cadastre-se
            </button>
          ) : (
            <button 
              className={styles.btnLogin}
              onClick={routeChange}
            >
              login
            </button>
          )
        }
      </header>
    </>
  )
} 
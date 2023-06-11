import styles from './styles.module.css';
import Logo from "../../../assets/images/Logo.png";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-scroll";

type HeaderProps = {
  isLoginScreen: boolean;
  isHomePage: boolean;
}

export function Header(props: HeaderProps) {
  const navigate = useNavigate();

  const routeChange = () => {
    const path = props.isLoginScreen ? "/cadastro" : "/login";
    navigate(path);
  }

  const routeChanger = (path: string) => {
    navigate(path);
  }

  const styleContainer = () => {
    if (props.isHomePage) {
      return styles.containerHome;
    }
    return styles.container;
  }

  return (
    <header className={styleContainer()}>
      <img onClick={() => routeChanger("/")} className={styles.image} src={Logo} alt="logo do site" />
      {props.isHomePage && (
        <ul className={styles.nav}>
          <li>
            <Link className={styles.link} to={'sectionTop'} spy={true} smooth={true} offset={0} duration={500}>
              INICIO
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={'sectionTopics'} spy={true} smooth={true} offset={-70} duration={500}>
              CONHEÇA
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={'sectionCards'} spy={true} smooth={true} offset={-60} duration={500}>
              COMO FUNCIONA
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={'sectionPlans'} spy={true} smooth={true} offset={-60} duration={500}>
              PLANOS
            </Link>
          </li>
        </ul>
      )}
      {props.isLoginScreen ? (
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
      )}
    </header>
  )
}

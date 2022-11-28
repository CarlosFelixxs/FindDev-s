import styles from './styles.module.css';
import Logo from "../../../assets/images/Logo.png";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-scroll";


export function Header(props: any) {

  const navigate = useNavigate();

  const routeChange = () => {
    const path = props.isLoginScreen === true ? "/cadastro" : "/login";
    navigate(path);
  }

  const routeChanger = (path : string) =>{ 
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
            <a><Link className={styles.link} to={'sectionTop'} spy={true} smooth={true} offset={0} duration={500}>INICIO</Link></a>
            <a><Link className={styles.link} to={'sectionTopics'} spy={true} smooth={true} offset={-70} duration={500}>CONHEÇA</Link></a>
            <a><Link className={styles.link} to={'sectionCards'} spy={true} smooth={true} offset={-60} duration={500}>COMO FUNCIONA</Link></a>
            <a><Link className={styles.link} to={'sectionPlans'} spy={true} smooth={true} offset={-60} duration={500}>PLANOS</Link></a>
          </ul>
        )
        }
        {props.isLoginScreen === true ? (
          <button
            className={styles.btnCadastro}
            onClick={routeChange}
          >
            CADASTRO
          </button>
        ) : (
          <button
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
import styles from './styles.module.css';
import Logo from "../../../assets/images/Logo.png";


export function Header() {
  return (
    <>
      <header className={styles.container}>
        <img className={styles.image} src={Logo} alt="logo do site" />
        <ul className={styles.nav}>
          <a href="#Inicio">INICIO</a>
          <a href="#Conheça">CONHEÇA</a>
          <a href="#Como_funciona">COMO FUNCIONA</a>
          <a href="#Planos">PLANOS</a>
        </ul>
        <button className={styles.btnLogin}>login</button>
      </header>
    </>
  )
} 
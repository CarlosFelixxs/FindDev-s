import styles from './styles.module.css';
import Logo from "../../../assets/images/Logo.png";

export function Header() {
  return (
    <>
      <header className={styles.container}>
        <img className={styles.image} src={Logo} alt="logo do site" />
        <ul className={styles.nav}>
          <a className={styles.nav1} href="#Inicio"><li>Inicio</li></a>
          <a className={styles.nav1} href="#Conheça"><li>Conheça</li></a>
          <a className={styles.nav1} href="#Como_funciona"><li>Como funciona</li></a>
          <a className={styles.nav1} href="#Planos"><li>Planos</li></a>
        </ul>
        <button className={styles.btnLogin}>login</button>
      </header>
    </>
  )
} 
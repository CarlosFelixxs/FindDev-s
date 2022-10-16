import styles from './styles.module.css';
import Logo from "../../../assets/images/Logo.png";
import Instagram from "../../../assets/images/InstagramLogo.png";
import Git from "../../../assets/images/GithubLogo.png";
import Linkedin from "../../../assets/images/LinkedinLogo.png";
import Discord from "../../../assets/images/DiscordLogo.png";
import Facebook from "../../../assets/images/FacebookLogo.png";

export function Footer() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.contLogo}>
          <img className={styles.imgBanner} src={Logo} alt="Logo" />
          <span className={styles.textLogo}>FindDev 2022</span>
        </div>
        <div className={styles.separador}></div>
        <div className={styles.contDesenvolvedores}>
          <span>Desenvolvedores</span>
          <div className={styles.nomes}>
            <ul>
              <p>Carlos Henrique Felix</p>
              <br />
              <p>Danilo Amorim Ferreira</p>
              <br />
              <p>Josias Florêncio</p>
            </ul>
            <ul>
              <p>Lucas Alves</p>
              <br />
              <p>Paulo Andrade</p>
              <br />
              <p>Victor Veniti</p>
            </ul>
          </div>
        </div>
        <div className={styles.separador}></div>
        <div className={styles.contRedes}>
          <span>Redes Sociais</span>
          <div className={styles.contImagens}>
            <div>
            <a target='_blank' className={styles.imgBanner} href="https://www.instagram.com/carloshfelix__/"><img src={Instagram} alt="Logo" /></a>
            </div>
            <div>
            <a target='_blank' className={styles.imgBanner} href="https://github.com/CarlosFelixxs/FindDev-s"><img src={Git} alt="Logo" /></a>
            </div>
            <div>
            <a target='_blank' className={styles.imgBanner} href="https://www.linkedin.com/"><img src={Linkedin} alt="Logo" /></a>
            </div>
            <div>
            <a target='_blank' className={styles.imgBanner} href="https://discord.gg/bwYbEbK7"><img src={Discord} alt="Logo" /></a>
            </div>
            <div>
            <a target='_blank' className={styles.imgBanner} href="https://www.facebook.com/"><img src={Facebook} alt="Logo" /></a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

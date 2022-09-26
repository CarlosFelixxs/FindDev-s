import { Header } from "../components/Header";
import styles from './home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.container_banner}>
          <h1 className={styles.h1}>conectando quem sabe com quem precisa</h1>
          <p className={styles.p}>a plataforma ideal para encontrar seus desenvolvedores freelancers</p>
          <button className={styles.btnComoFunciona}>como funciona</button>
        </div>
        <div className={styles.containerImg}>
          <img className={styles.imgBanner} src="/imgBanner.png" alt="imagem do banner" />
        </div>
      </section>
    </>
  )
}

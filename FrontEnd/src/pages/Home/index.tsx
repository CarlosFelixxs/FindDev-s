import { Header } from "../../shared/components/Header";
import styles from './home.module.css'
import imagemBanner from "../../assets/images/imgBanner.png";
import { TopicOne, TopicTwo, TopicTree, TopicFour } from '../../shared/components/Topics'

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
          <img className={styles.imgBanner} src={imagemBanner} alt="imagem do banner" />
        </div>
      </section>
      <section className={styles.sectionTopics}>
        <div className={styles.contH1}>
          <h1 className={styles.h1Topics}>Por que escolher a FindDev?</h1>
        </div>
        <div className={styles.cont_tp}>
          <div className={styles.sectionTp}>
            <TopicOne />
            <TopicTree />
          </div>
          <div className={styles.sectionTp1}>
            <TopicTwo />
            <TopicFour />
          </div>
        </div>
      </section>
    </>
  )
}

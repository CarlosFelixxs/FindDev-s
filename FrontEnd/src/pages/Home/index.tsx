import { Header } from "../../shared/components/Header";
import styles from './home.module.css'
import { TopicOne, TopicTwo, TopicTree, TopicFour } from '../../shared/components/Topics'
import { Cards } from "../../shared/components/Cards";
import { Banner } from "../../shared/components/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
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
      <section className={styles.sectionCards}>
        <div className={styles.contH1}>
          <h1 className={styles.h1Topics}>E como funcionamos?</h1>
        </div>
        <div className={styles.contCards}>
          <Cards />
        </div>
      </section>
    </>
  )
}

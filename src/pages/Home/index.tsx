import { Header } from "../../shared/components/Header";
import styles from './home.module.css'
import { TopicOne, TopicTwo, TopicTree, TopicFour } from '../../shared/components/Topics'
import { Cards } from "../../shared/components/Cards";
import { Banner } from "../../shared/components/Banner";
import { Footer } from "../../shared/components/Footer";
import { Plans } from "../../shared/components/Plans";
import Topo from "../../assets/images/VoltarTopo.png";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <>
      <Header isLoginScreen = {false} isHomePage = {true}/>
      <section id="sectionTop" className={styles.container}>
        <Banner />
      </section>
      <section id="sectionTopics" className={styles.sectionTopics}>
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
      <section id="sectionCards" className={styles.sectionCards}>
        <div className={styles.contH1}>
          <h1 className={styles.h1Topics}>E como funciona?</h1>
        </div>
        <div className={styles.contCards}>
          <Cards />
        </div>
      </section>
      <section id="sectionPlans" className={styles.sectionPlans}>
        <div className={styles.contH1}>
          <h1 className={styles.h1Topics}>Planos</h1>
        </div>
        <div className={styles.contCards}>
          <Plans />
        </div>
      </section>
      <section className={styles.sectionFooter}>
        <div className={styles.contFooter}>
          <Footer />
        </div>
        <div className={styles.contButtonFooter}>
          <button>
            <a className={styles.imgBanner}><Link to={'sectionTop'} spy={true} smooth={true} offset={0} duration={500}><img src={Topo} alt="Logo" /></Link></a>
          </button>
        </div>
      </section>
    </>
  )
}

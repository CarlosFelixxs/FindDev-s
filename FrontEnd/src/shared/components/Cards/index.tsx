import styles from './styles.module.css';
import Img1 from "../../../assets/images/mobile.png";
import Img2 from "../../../assets/images/homemLupa.png";
import Img3 from "../../../assets/images/apertodemaos.png";
import Seta from "../../../assets/images/seta.png";


export function Cards() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.cont}>
          <div className={styles.contCard}>
            <div className={styles.contImg}>
              <img className={styles.imagemP} src={Img1} alt="" />
            </div>
            <div className={styles.contText}>
              <p className={styles.textCards}>O desenvolvedor e o cliente se cadastram na FindDev e criam seus perfis.</p>
            </div>
          </div>
          <div className={styles.seta}>
            <img src={Seta} alt="" />
          </div>
          <div className={styles.contCard}>
            <div className={styles.contImg}>
              <img className={styles.imagemP} src={Img2} alt="" />
            </div>
            <div className={styles.contText}>
              <p className={styles.textCards}>O cliente procura pelo freelancer que atende às necessidades do projeto.</p>
            </div>
          </div>
          <div className={styles.seta}>
            <img src={Seta} alt="" />
          </div>
          <div className={styles.contCard}>
            <div className={styles.contImg}>
              <img className={styles.imagemP} src={Img3} alt="" />
            </div>
            <div className={styles.contText}>
              <p className={styles.textCards}>Após o match, o profissional e o cliente fecham negócio através da FindDev.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 
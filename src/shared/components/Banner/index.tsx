import styles from './styles.module.css';
import imagemBanner from "../../../assets/images/imgBanner.png";

export function Banner() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.container_banner}>
          <div className={styles.contText}>
            <h1 className={styles.h1}> <span className={styles.span}>conectando</span> quem <span className={styles.span}>sabe</span> com quem <span className={styles.span}>precisa</span></h1>
            <p className={styles.p}>a plataforma ideal para encontrar seus desenvolvedores freelancers</p>
            <button id='button-como-funciona-banner' className={styles.btnComoFunciona}>como funciona</button>
          </div>
        </div>
        <div className={styles.containerImg}>
          <img className={styles.imgBanner} src={imagemBanner} alt="imagem do banner" />
        </div>
      </section>
    </>
  )
}

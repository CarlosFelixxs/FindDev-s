import styles from './styles.module.css';
import Star from "../../../assets/images/StarRate.png";
import { useNavigate } from 'react-router-dom';

export function RateComponent(props: any) {


  return (
    <>
      <section className={styles.container}>
        <img className={styles.imgRate} src={Star} alt="imagem do banner" />
        <img className={styles.imgRate} src={Star} alt="imagem do banner" />
        <img className={styles.imgRate} src={Star} alt="imagem do banner" />
        <img className={styles.imgRate} src={Star} alt="imagem do banner" />
        <img className={styles.imgRate} src={Star} alt="imagem do banner" />
      </section>
    </>
  )
} 
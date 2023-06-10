import styles from './styles.module.css';
import Logo from "../../../assets/images/Logo.png";
import Estrela from "../../../assets/images/estrela.png";
import Prancheta from "../../../assets/images/prancheta.png";
import List from "../../../assets/images/list.png";
import Perfil from "../../../assets/images/perfil.png";

export function TopicOne() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={Estrela} alt="" />
        <h2 className={styles.textTitle}>AVALIAÇÃO MÚTUA</h2>
        <p className={styles.textSubTitle}>Após o serviço, tanto o profissional freelancer quanto o cliente poderão avaliar o serviço de ambos os lado.</p>
      </div>
    </>
  )
}

export function TopicTwo() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={Prancheta} alt="" />
        <h2 className={styles.textTitle}>ESCOPO DO PRODUTO</h2>
        <p className={styles.textSubTitle}>O usuário pode definir as funcionalidades iniciais do projeto para que o desenvolvedor já conheça o produto</p>
      </div>
    </>
  )
}

export function TopicTree() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={List} alt="" />
        <h2 className={styles.textTitle}>STATUS DO PROJETO</h2>
        <p className={styles.textSubTitle}>O cliente terá acesso ao status do projeto que está em desenvolvimento para que possa acompanhar o progresso do mesmo.</p>
      </div>
    </>
  )
}

export function TopicFour() {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={Perfil} alt="" />
        <h2 className={styles.textTitle}>PERFIL PERSONALIZADO</h2>
        <p className={styles.textSubTitle}>Faça uma descrição sobre si mesmo, adicione suas skills, e exiba seu portfolio da forma que desejar em nossa plataforma.</p>
      </div>
    </>
  )
} 
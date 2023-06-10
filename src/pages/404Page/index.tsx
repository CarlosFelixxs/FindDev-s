import styles from './styles.module.css'
import PageNotFound from "../../assets/images/PageNotFound.png";
import { GoBack } from "../../shared/components/GoBack/index";

export default function ErrorPage() {
  return (
    <>
      <section className={styles.container}>
        <GoBack />
        <img src={PageNotFound} alt="" />
      </section>
    </>
  )
}


import styles from './styles.module.css';

type HiringCardTypes = {
  stack: string,
  senioridade: string,
  nomeDev: string,
  title: string,
  description: string,
  salary?: number,
  button: JSX.Element|JSX.Element[],
  id: number,
}
export default function VacancyCardDetailed({stack, senioridade, nomeDev, title, salary, description, button} : HiringCardTypes) {

  return (
    <div className={styles.card}>
      <div className={styles.topicContent}>
        <span className={styles.title}>{title}</span>
        <div className={styles.topics}>
          <span className={styles.nomeDev}>{nomeDev}</span>
          <div className={styles.stackSenioridade}>
            <span>{stack}</span>
            <span>{senioridade}</span>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.titleDescription}>
          Detalhes do desenvolvedor:
        </div>
        <div className={styles.textDescription}>
          {description}
        </div>
      </div>
      {button}
    </div>
  )
}

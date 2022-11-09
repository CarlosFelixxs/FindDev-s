import HeaderLogado from '../../shared/components/HeaderLogado/Index';
import styles from './styles.module.css'
import FotoPerfil from "../../assets/images/DevPerfil.png";
import { RateComponent } from '../../shared/components/RateComponent';
import checkIcon from "../../assets/images/check.png";
import editIcon from "../../assets/images/edit-3.png";
import { useState } from 'react';

export default function PerfilDev(props: any) {

  const [editavel, setEditavel] = useState(false);
  const [bioInput, setBioInput] = useState(props.bioInput);

  return (
    <>
      <HeaderLogado nome={"danilo"} />
      <section className={styles.container}>
        <div className={styles.contInfo}>
          <div className={styles.info}>
            <img className={styles.imgInfo} src={FotoPerfil} alt="imagem do banner" />
            <span className={styles.textInfo}>
              <h1>Danilo Amorim</h1>
              <h6>Dev | Intern | Backend | C6 Bank | SPTech</h6>
            </span>
            <RateComponent />
          </div>
        </div>

        <section className={styles.sectionBio}>
          <div className={styles.contBio}>
            <div className={styles.icon}>
              <h1>biografia</h1>
              <div>
                <img src={editIcon} alt="" onClick={() => setEditavel(true)} />
                <img src={checkIcon} alt="" onClick={() => setEditavel(!editavel)} />
              </div>
            </div>
            <div className={styles.bio}>
              <textarea
                maxLength={1000}
                placeholder='Fale um pouco de você'
                className={editavel ? "input-bio-enable" : "input-bio-disable"}
                disabled={!editavel}
                onChange={(e) => setBioInput(e.target.value)}
                defaultValue={bioInput}
              />
            </div>
          </div>
          <div className={styles.contLoc}>
            <h1>localização</h1>
            <div className={styles.loc}>
              <li>São Paulo</li>
              <li>Campinas</li>
            </div>
          </div>
        </section>

        <section className={styles.sectionComp}>
          <div className={styles.contCompetencias}>
            <h1>competências</h1>
            <div className={styles.competencias}>
              <div>
                <li>React</li>
                <li>React Native</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
              </div>
              <div>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>React Native</li>
                <li>HTML</li>
              </div>
              <div>
                <li>React</li>
                <li>React Native</li>
                <li>CSS</li>
              </div>
            </div>
          </div>
          <div className={styles.contButtonJobs}>
            <button className={styles.buttonJobs}>
              <div className={styles.textButton}>jobs encerrados</div>
            </button>
          </div>
        </section>
      </section>
    </>
  )
}

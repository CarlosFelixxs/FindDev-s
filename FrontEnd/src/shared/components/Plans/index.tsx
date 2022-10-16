import styles from './styles.module.css';
import Bronze from "../../../assets/images/Bronze.png";
import Silver from "../../../assets/images/Silver.png";
import Gold from "../../../assets/images/Gold.png";

export function Plans() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.plano1}>
          <h1>Free</h1>
          <div className={styles.contImg}>
            <img className={styles.image} src={Bronze} alt="logo do site" />
          </div>
          <div className={styles.precoAntigo}>
            <span>$ 255,00 For</span>
          </div>
          <div className={styles.precoAtual}>
            <span>$0,00</span>
          </div>
          <div className={styles.contButton}>
            <button>COMEÇAR AGORA</button>
          </div>
          <div className={styles.separador}></div>
          <div className={styles.contBeneficios}>
            <div className={styles.text}>
              <span className={styles.barraVerde}></span>
              <span>Encontre Empresas</span>
            </div>
            <div className={styles.separadorH}></div>
            <div className={styles.text}>
              <span className={styles.barraVerde}></span>
              <span>Candidate-se em uma vaga.</span>
            </div>
            <div className={styles.separadorH}></div>
            <div className={styles.text}>
              <span className={styles.barraVerde}></span>
              <span>Avalie as empresas.</span>
            </div>
          </div>
        </div>
        <div className={styles.plano2}>
        <h1>Pro</h1>
          <div className={styles.contImg}>
            <img className={styles.image} src={Silver} alt="logo do site" />
          </div>
          <div className={styles.precoAntigo2}>
            <span>Annual plan <text>$ 60,00</text> For</span>
          </div>
          <div className={styles.precoAtual2}>
            <span><text>12x</text>$05,00</span>
          </div>
          <div className={styles.contButton2}>
            <button>ADQUIRIR PRO</button>
          </div>
          <div className={styles.separador}></div>
          <div className={styles.contBeneficios}>
            <div className={styles.text}>
              <span className={styles.barraVerde}></span>
              <span>Encontre Empresas</span>
            </div>
            <div className={styles.separadorH}></div>
            <div className={styles.text}>
              <span className={styles.barraVerde}></span>
              <span>Candidate-se em até três vagas.</span>
            </div>
            <div className={styles.separadorH}></div>
            <div className={styles.text}>
              <span className={styles.barraVerde}></span>
              <span>Avalie as empresas.</span>
            </div>
          </div>
        </div>
        <div className={styles.plano3}>
        <h1>Ultimate</h1>
          <div className={styles.contImg}>
            <img className={styles.image} src={Gold} alt="logo do site" />
          </div>
          <div className={styles.precoAntigo3}>
            <span>Annual plan <text>$ 120,00</text> For</span>
          </div>
          <div className={styles.precoAtual2}>
          <span><text>12x</text>$10,00</span>
          </div>
          <div className={styles.contButton3}>
            <button>ADQUIRIR ULTIMATE</button>
          </div>
          <div className={styles.separador}></div>
          <div className={styles.contBeneficios}>
            <div className={styles.text}>
              <span className={styles.barraRoxa}></span>
              <span>Encontre Empresas</span>
            </div>
            <div className={styles.separadorH}></div>
            <div className={styles.text}>
              <span className={styles.barraRoxa}></span>
              <span>Candidate-se a mais de três vagas.</span>
            </div>
            <div className={styles.separadorH}></div>
            <div className={styles.text}>
              <span className={styles.barraRoxa}></span>
              <span>Avalie as empresas.</span>
            </div>
            <div className={styles.separadorH}></div>
            <div className={styles.text}>
              <span className={styles.barraRoxa}></span>
              <span>Saiba quais empresas te avaliaram.</span>
            </div>
            <div className={styles.separadorH}></div>
            <div className={styles.text}>
              <span className={styles.barraRoxa}></span>
              <span>Saiba quais empresas olharam seu perfil.</span>
            </div>
            <div className={styles.separadorH}></div>
            <div className={styles.text}>
              <span className={styles.barraRoxa}></span>
              <span>Maior visibilidade do perfil para empresas.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

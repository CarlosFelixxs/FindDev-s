import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/images/Logo@2x.png";
import jobs from "../../assets/images/Job hunt-amico 1.png";
import profileImg from "../../assets/images/Personal data-cuate 1.png";
import HeaderLogado from "../../shared/components/HeaderLogado/Index";

export default function OptionDev() {

   const navigate = useNavigate();

   const routeChange = (path: string) => {
      navigate(path);
   }

   return (
      <>
         <HeaderLogado isDevOrCompany={"dev"}/>
         <div className={styles.container}>
            <div className={styles.findProfile}>
               <div className={styles.div_imgFrase} onClick={() => routeChange("/resultado-busca-vaga")}>
                  <div className={styles.div_itens}>
                     <p>Encontre o job ideal</p>
                     <img src={jobs} alt="Imagem job" className={styles.img} />
                  </div>
               </div>
            </div>

            <div className={styles.findProfileRight} onClick={() => routeChange("/perfil-dev")}>
               <div className={styles.div_imgFrase1}>
                  <div className={styles.div_itens}>
                     <div className={styles.div_phraseRight}>Perfil e estatísticas</div>
                     <img src={profileImg} alt="Imagem job" className={styles.img} />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
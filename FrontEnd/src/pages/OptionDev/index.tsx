import path from "path";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/images/Logo@2x.png";
import jobs from "../../assets/images/Job hunt-amico 1.png";
import profileImg from "../../assets/images/Personal data-cuate 1.png";

export default function OptionDev() {
   
   const navigate = useNavigate();

   const routeChange = (path: string) => {
      navigate(path);
   }

   return (
      <>
         <div className={styles.container}>
            <div className={styles.findProfile} onClick={() => routeChange("/")}>
               <div className={styles.header}>
                  <img src={logo} alt="Logo" />
               </div>

               <div className={styles.div_imgFrase}>
                  <div className={styles.div_itens}>
                     <div className={styles.div_phrase}>Encontre o job ideal</div>
                     <img src={jobs} alt="Imagem job" className={styles.img} />
                  </div>
               </div>
            </div>

            <div className={styles.findProfileRight} onClick={() => routeChange("/")}>
               <div className={styles.headerRight}>Olá, </div>

               <div className={styles.div_imgFrase}>
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
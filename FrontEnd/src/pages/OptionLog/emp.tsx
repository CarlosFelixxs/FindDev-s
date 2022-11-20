import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/images/Logo@2x.png";
import publish from "../../assets/images/Hiring-amico 1.png";
import profileImg from "../../assets/images/Metrics-bro 1.png";

export default function OptionEmp() {
   
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
                     <div className={styles.div_phrase}>Publique sua vaga</div>
                     <img src={publish} alt="Imagem job" className={styles.img} />
                  </div>
               </div>
            </div>

            <div className={styles.findProfileRight} onClick={() => routeChange("/")}>
               <div className={styles.headerRight}>X-Team </div>

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
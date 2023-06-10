import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import publish from "../../assets/images/Hiring-amico 1.png";
import profileImg from "../../assets/images/Metrics-bro 1.png";
import HeaderLogado from "../../shared/components/HeaderLogado/Index";

export default function OptionEmp() {

   const navigate = useNavigate();

   const routeChange = (path: string) => {
      navigate(path);
   }

   return (
      <>
         <HeaderLogado isDevOrCompany={"company"}/>
         <div className={styles.container}>
            <div className={styles.findProfile} onClick={() => routeChange("/formulario-vaga")}>
               <div className={styles.div_imgFrase}>
                  <div className={styles.div_itens}>
                     <p>Publique sua vaga</p>
                     <img src={publish} alt="Imagem job" className={styles.img} />
                  </div>
               </div>
            </div>

            <div className={styles.findProfileRight} onClick={() => routeChange("/perfil-company")}>
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
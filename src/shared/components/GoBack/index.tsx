import styles from './styles.module.css';
import Seta from "../../../assets/images/arrow-left.png";
import { useNavigate } from 'react-router-dom';

export function GoBack(props: any) {

  const history = useNavigate();


  return (
    <>
    <button onClick={() => history.prototype('/')} className={styles.container}>
      <img src={Seta} alt="" />
    </button>
    </>
  )
} 
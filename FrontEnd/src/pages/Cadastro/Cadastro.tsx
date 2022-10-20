import { useNavigate  } from 'react-router-dom';
import useCadastro from './Cadastro.hook';

import styles from './styles.module.css';

import { Header } from '../../shared/components/Header';
import { useState } from 'react';

export default function Cadastro() {

  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  const routeChange = (path : string) =>{ 
    navigate(path);
  }

  const handleNext = () => {
    setStep(step + 1);
  };

  const { cadastroSteps } = useCadastro();

  return (
    <>
      <Header isLoginScreen={false} isHomePage={false}/>
      <div className={styles.container}>
        {cadastroSteps[step].body}
      </div>
    </>
  )
}

import React, { useState } from 'react';

import { useNavigate  } from 'react-router-dom';

import styles from './styles.module.css';

import signupImage from "../../assets/images/signup-img.png";

type UseCadastroTypes = {
    step : number;
}

export default function useCadastro() {

    const navigate = useNavigate();
    const routeChange = (path : string) =>{ 
        navigate(path);
    };

    const cadastroSteps = [
        {
            id: '1',
            body: (
                <>
                    <div className={styles.left}>
                        <div className={styles.text}>
                            <div className={styles.title}>
                            OLÁ, BEM VINDO! <br />  
                            JÁ POSSUI UMA CONTA?
                            </div>
                            <div className={styles.subtitle} onClick={() => routeChange("/login")}>
                            REALIZE SEU LOGIN
                            </div>
                        </div>
                        <div className={styles.image}>
                            <img src={signupImage} alt="imagem do banner" />
                        </div>
                        </div>
                        <div className={styles.right}>
                        <div className={styles.cardSignup}>
                            <div className={styles.cardContent}>
                            <h1>CADASTRO</h1>
                            <form className={styles.formSignup}>
                                <div className={styles.leabelInput}>
                                <label>EMAIL</label>
                                <div className={styles.separador}></div>
                                <input type="text" className={styles.input} placeholder="exemplo@email.com"/>
                                </div>
                                <div className={styles.leabelInput}>
                                <label>SENHA</label>
                                <div className={styles.separador}></div>
                                <input type="text" className={styles.input} placeholder="*************"/>
                                </div>
                                <div className={styles.leabelInput}>
                                <label>CONFIRMAÇÃO DE SENHA</label>
                                <div className={styles.separador}></div>
                                <input type="text"className={styles.input} placeholder="*************"/>
                                </div>
                                <input type="Submit" value="CONTINUAR" className={styles.submit} />
                            </form>
                            </div>
                        </div>
                    </div>
                </>
            )
        },
        {
            id: '1',
            body: ( 
                <>
                    teste
                </>
            ),
        },
    ];  
  return { cadastroSteps };
}

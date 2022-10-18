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
                            Olá, bem vindo! <br />  
                            possui uma conta?
                        </div>
                        <div className={styles.subtitle} onClick={() => routeChange("/login")}>
                            Realize seu login
                        </div>
                        </div>
                        <div className={styles.image}>
                        <img src={signupImage} alt="imagem do banner" />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.cardSignup}>
                        <div className={styles.cardContent}>
                            <h1>Cadastro</h1>
                            <form className={styles.formSignup}>
                            <div className={styles.leabelInput}>
                                <label>Email:</label>
                                <input type="text" className={styles.input} placeholder="exemplo@email.com"/>
                            </div>
                            <div className={styles.leabelInput}>
                                <label>Senha:</label>
                                <input type="text" className={styles.input} placeholder="*************"/>
                            </div>
                            <div className={styles.leabelInput}>
                                <label>Confirmação de Senha:</label>
                                <input type="text"className={styles.input} placeholder="*************"/>
                            </div>
                            <button onClick={() => null} className={styles.submit}>Continuar</button>
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

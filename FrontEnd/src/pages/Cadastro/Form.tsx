import React from 'react'

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import {fetchStates} from '../../services/ibge';

import styles from './styles.module.css';

type FormType = {
    button : JSX.Element|JSX.Element[] ,
    step : number,
    userType: string,
}

export default function Form({button, step, userType} : FormType) {

    const {register, handleSubmit, setValue, setFocus} = useForm();

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [signUpCompanyData, setSignUpCompanyData] = useState({
        email: "",
        senha: "",
        razaoSocial: "",
        telefone: "",
        CNPJ: "",
        estado: "",
        cidade: "",
        bairro: "",
        endereco: "",
    });

    const [signUpDevData, setSignUpDevData] = useState({
        email: "",
        senha: "",
        nome: "", 
        telefone: "",
        CPF: "",
        estadoDev: "",
        cidadeDev: "",
    });

    useEffect(() => {

        fetchStates().then(states =>{
            setStates(states);
            
        }).catch(erro =>{
            console.log(erro);
        })

    }, []);


    const onSubmitFirstStep = (e : any) => {
        setSignUpCompanyData({...signUpCompanyData, email:signUpCompanyData.email = e.email, senha:signUpCompanyData.senha = e.senha});
        setSignUpDevData({...signUpDevData, email:signUpDevData.email = e.email, senha:signUpDevData.senha = e.senha});
        console.log(signUpDevData);
    };

    const onSubmitThirdStepDev = (e : any) => {
        setSignUpDevData({...signUpDevData, nome:signUpDevData.nome = e.nome, telefone:signUpDevData.telefone = e.telefone, CPF:signUpDevData.CPF = e.CPF});
        console.log(signUpDevData);
    };

    const onSubmitThirdStepCompany = (e : any) => {
        setSignUpCompanyData({
                ...signUpCompanyData, 
                razaoSocial:signUpCompanyData.razaoSocial = e.razaoSocial,
                telefone:signUpCompanyData.telefone = e.telefone,
                CNPJ:signUpCompanyData.CNPJ = e.CNPJ
            });
        console.log(signUpCompanyData);
    };

    const onSubmitFourthStepDev = (e : any) => {
        setSignUpDevData({...signUpDevData, estadoDev:signUpDevData.estadoDev = e.estadoDev, cidadeDev:signUpDevData.cidadeDev = e.cidadeDev});
        console.log(signUpDevData);
    };

    const onSubmitFourthStepCompany = (e : any) => {
        setSignUpCompanyData({
            ...signUpCompanyData, 
            cidade:signUpCompanyData.cidade = e.cidadeCompany,
            estado:signUpCompanyData.estado = e.estadoCompany,
            bairro:signUpCompanyData.bairro = e.bairro,
            endereco:signUpCompanyData.endereco = `${e.logradouro}, ${e.numero}`,
        });
        console.log(signUpCompanyData);
    };
    
    const handleInputStatesChange = (e : any) => {
        if (!e.target.value) return Promise.resolve([]);
        const state = e.target.value;
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`)
        .then(res => res.json()).then(cities =>{
            setCities(cities);
        }).catch(erro =>{
            console.log(erro);
        });
        const sorted = cities.sort((a, b) => {
            return b - a;
        });
        setCities(sorted);
    }

    const checkCEP = (e : any) => {
        if (!e.target.value) return;
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            setValue('estadoCompany', data.uf);
            setValue('cidadeCompany', data.localidade);
            setValue('logradouro', data.logradouro);
            setValue('bairro', data.bairro);
        }).catch((err) =>{ 
            console.log(err)
        });
        setFocus('numero');
    }

    const renderForm = () => {
        if (step === 0) {
            return(
                <>
                    <h1>CADASTRO</h1>
                    <form className={styles.formSignup} onSubmit={handleSubmit(onSubmitFirstStep)}>
                        <div className={styles.leabelInput}>
                            <label>EMAIL</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("email")} placeholder="exemplo@email.com"/>
                        </div>
                        <div className={styles.leabelInput}>
                            <label>SENHA</label>
                            <div className={styles.separador}></div>
                            <input type="password" className={styles.input} {...register("senha")} placeholder="*************"/>
                        </div>
                        <div className={styles.leabelInput}>
                            <label>CONFIRMAÇÃO DE SENHA</label>
                            <div className={styles.separador}></div>
                            <input type="password" className={styles.input} {...register("confirmacao")} placeholder="*************"/>
                        </div>
                        {button}
                    </form>
                </>
            )
        } else if (step === 1) {
            return(
                <>
                    <div className={styles.titleDevOrCompany}>
                        <h2>Empresa ou Desenvolvedor?</h2>
                        <div className={styles.separador}></div>
                        <h3>Você atuará como desenvolvedor ou como contratante na FindDev</h3>
                    </div>
                    <div className={styles.devOrCompany}>
                        {button}
                    </div>
                </>
            )
        } else if (step === 2 && userType === "dev") {
            return(
                <>
                    <h1>CADASTRO</h1>
                    <form className={styles.formSignup} onSubmit={handleSubmit(onSubmitThirdStepDev)}>
                        <div className={styles.leabelInput}>
                            <label>NOME</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("nome")}/>
                        </div>
                        <div className={styles.leabelInput}>
                            <label>CPF</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("CPF")}/>
                        </div>
                        <div className={styles.leabelInput}>
                            <label>TELEFONE</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("telefone")} placeholder="(11) 912345678"/>
                        </div>
                        {button}
                    </form>
                </>
            )
        }else if (step === 2 && userType === "company") {
            return(
                <>
                    <h1>CADASTRO</h1>
                    <form className={styles.formSignupThridStepCompany} onSubmit={handleSubmit(onSubmitThirdStepCompany)}>
                        <div className={styles.leabelInput}>
                            <label>RAZÃO SOCIAL</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("razaoSocial")}/>
                        </div>
                        <div className={styles.leabelInput}>
                            <label>TELEFONE</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("telefone")} placeholder="(11) 912345678"/>
                        </div>
                        <div className={styles.leabelInput}>
                            <label>CNPJ</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("CNPJ")}/>
                        </div>
                        {button}
                    </form>
                </>
            )
        }else if (step === 3 && userType === "dev") {
            return(
                <>
                    <h1>CADASTRO</h1>
                    <form className={styles.formSignupThridStepCompany} onSubmit={handleSubmit(onSubmitFourthStepDev)}>
                        <div className={styles.leabelInput}>
                            <label htmlFor="state">ESTADO</label>
                            <div className={styles.separador}></div>
                            <select className={styles.input} id="state"  onChange={handleInputStatesChange}>
                                <option value="" selected disabled>Selecione um estado...</option>
                                {states.map((state)=>{
                                    const {sigla, nome} = state;
                                    return(<option key={sigla} value={sigla} {...register("estadoDev")}>{nome}</option>)
                                })}
                            </select>
                        </div>

                        <div className={styles.leabelInput}>
                            <label htmlFor="city">CIDADE</label>
                            <div className={styles.separador}></div>
                            <select className={styles.input} id="city">
                                <option value="" selected disabled>Selecione uma cidade...</option>
                                {cities.map((city)=>{
                                    const {id, nome} = city;
                                    return(<option key={id} value={nome} {...register("cidadeDev")}>{nome}</option>)
                                })}
                            </select>
                        </div>
                        {button}
                    </form>
                </>
            )
        }else if (step === 3 && userType === "company") {
            return(
                <>
                    <h1>CADASTRO</h1>
                    <form className={styles.formSignupThridStepCompany} onSubmit={handleSubmit(onSubmitFourthStepCompany)}>
                        <div className={styles.thirdStepContent}>
                            <div className={styles.sideThirdStep}>
                                <div className={styles.leabelInput}>
                                    <label>CEP</label>
                                    <div className={styles.separador}></div>
                                    <input type="text" className={styles.input} {...register("cep")} onBlur={checkCEP}/>
                                </div>

                                <div className={styles.leabelInput}>
                                    <label>CIDADE</label>
                                    <div className={styles.separador}></div>
                                    <input type="text" className={styles.input} {...register("cidadeCompany")}/>
                                </div>

                                <div className={styles.leabelInput}>
                                    <label>LOGRADOURO</label>
                                    <div className={styles.separador}></div>
                                    <input type="text" className={styles.input} {...register("logradouro")}/>
                                </div>
                            </div>

                            <div className={styles.sideThirdStep}>
                                <div className={styles.leabelInput}>
                                    <label>ESTADO</label>
                                    <div className={styles.separador}></div>
                                    <input type="text" className={styles.input} {...register("estadoCompany")}/>
                                </div>

                                <div className={styles.leabelInput}>
                                    <label>BAIRRO</label>
                                    <div className={styles.separador}></div>
                                    <input type="text" className={styles.input} {...register("bairro")}/>
                                </div>

                                <div className={styles.leabelInput}>
                                    <label>NÚMERO</label>
                                    <div className={styles.separador}></div>
                                    <input type="text" className={styles.input} {...register("numero")}/>
                                </div>
                            </div>
                            
                        </div>
                        {button}
                    </form>
                </>
            )
        }else {
            return(
                <>
                    <div className={styles.finalCardSignup}>
                        <h1>PARABÉNS</h1>
                        <div className={styles.separador}></div>
                        <h3>SEU CADASTRO FOI REALIZADO COM SUCESSO</h3>
                    {button}
                    </div>
                </>
            )
        }
    }

  return (
    <>
        {renderForm()}
    </>
  )
}

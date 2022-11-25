import React from 'react'

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupPassword from 'yup-password';


import {fetchStates} from '../../services/ibge';

import styles from './styles.module.css';

type FormType = {
    button : JSX.Element|JSX.Element[] ,
    step : number,
    userType: string,
}

interface FormProps {
    email: string;
    senha: string;
    confirmacao: string;
    nome: string;
    estadoCompany: string;
    cidadeCompany: string;
    logradouro: string;
    bairro: string;
    numero: string;
    telefone: string;
    CPF: string;
    CNPJ: string;
    estadoDev: string;
    cidadeDev: string;
    cep: string;
}

YupPassword(yup);

const signUpSchema = yup.object({
    nome: yup.string().required('Este campo é obrogatório'),
    senha: yup.string().required('No password provided.').min(8,'A senha deve conter no minimo 8 caracteres')
      .minUppercase(1, 'password must contain at least 1 upper case letter')
      .minLowercase(1, 'password must contain at least 1 lower case letter')
      .minNumbers(1, 'password must contain at least 1 number')
      .minSymbols(1, 'password must contain at least 1 special character')
      .max(40, 'A senha deve conter no máximo 40 caracteres'),
    confirmacao: yup.string().required('Este campo é obrogatório')
    .oneOf([yup.ref('senha'), null], 'As senhas não correspondem'),
    email: yup.string().email('Insira um email válido').required('Este campo é obrogatório'),
    telefone: yup.string().min(11, "O telefone deve conter o DDD sem traços parenteses").max(11, "O telefone deve conter o DDD sem traços e parenteses"),
    CPF: yup.string().required('Este campo é obrogatório').min(11, 'CPF deve conter os 11 digitos'),
    CNPJ: yup.string().required('Este campo é obrogatório').min(14, 'CNPJ deve conter os 14 digitos'),
}).required()

export default function Form({button, step, userType} : FormType) {

    const {
            register,
            handleSubmit, 
            formState: { errors },
            setValue, 
            setFocus,
        } = useForm<FormProps>({
                resolver: yupResolver(signUpSchema)
            });

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [signUpCompanyData, setSignUpCompanyData] = useState({
        email: "",
        senha: "",
        nome: "",
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
        estado: "",
        cidade: "",
    });

    useEffect(() => {

        fetchStates().then(states =>{
            setStates(states);
            
        }).catch(erro =>{
            console.log(erro);
        })

    }, []);


    const onSubmitFirstStep = (e : FormProps) => {
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
                nome:signUpCompanyData.nome = e.nome,
                telefone:signUpCompanyData.telefone = e.telefone,
                CNPJ:signUpCompanyData.CNPJ = e.CNPJ
            });
        console.log(signUpCompanyData);
    };

    const onSubmitFourthStepDev = (e : any) => {
        setSignUpDevData({...signUpDevData, estado:signUpDevData.estado = e.estadoDev, cidade:signUpDevData.cidade = e.cidadeDev});
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
                        <div className={styles.labelInput}>
                            <label>EMAIL</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={errors.email ? styles.inputError : styles.input} {...register("email")} placeholder="exemplo@email.com"/>
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div className={styles.labelInput}>
                            <label>SENHA</label>
                            <div className={styles.separador}></div>
                            <input type="password" className={styles.input} {...register("senha")} placeholder="*************"/>
                            {errors.senha && <p>{errors.senha.message}</p>}
                        </div>
                        <div className={styles.labelInput}>
                            <label>CONFIRMAÇÃO DE SENHA</label>
                            <div className={styles.separador}></div>
                            <input type="password" className={styles.input} {...register("confirmacao")} placeholder="*************"/>
                            {errors.confirmacao && <p>{errors.confirmacao.message}</p>}
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
                        <div className={styles.labelInput}>
                            <label>NOME</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("nome")}/>
                        </div>
                        <div className={styles.labelInput}>
                            <label>CPF</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("CPF")}/>
                        </div>
                        <div className={styles.labelInput}>
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
                        <div className={styles.labelInput}>
                            <label>RAZÃO SOCIAL</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("nome")}/>
                        </div>
                        <div className={styles.labelInput}>
                            <label>TELEFONE</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("telefone")} placeholder="(11) 912345678"/>
                        </div>
                        <div className={styles.labelInput}>
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
                        <div className={styles.labelInput}>
                            <label htmlFor="state">ESTADO</label>
                            <div className={styles.separador}></div>
                            <select className={styles.input} id="state" {...register("estadoDev")} onChange={handleInputStatesChange}>
                                <option value="" selected disabled>Selecione um estado...</option>
                                {states.map((state)=>{
                                    const {sigla, nome} = state;
                                    return(<option key={sigla} value={sigla} >{nome}</option>)
                                })}
                            </select>
                        </div>

                        <div className={styles.labelInput}>
                            <label htmlFor="city">CIDADE</label>
                            <div className={styles.separador}></div>
                            <select className={styles.input} id="city" {...register("estadoDev")}>
                                <option value="" selected disabled>Selecione uma cidade...</option>
                                {cities.map((city)=>{
                                    const {id, nome} = city;
                                    return(<option key={id} value={nome}>{nome}</option>)
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
                                <div className={styles.labelInput}>
                                    <label>CEP</label>
                                    <div className={styles.separador}></div>
                                    <input type="text" className={styles.input} {...register("cep")} onBlur={checkCEP}/>
                                </div>

                                <div className={styles.labelInput}>
                                    <label>CIDADE</label>
                                    <div className={styles.separador}></div>
                                    <input type="text" className={styles.input} {...register("cidadeCompany")}/>
                                </div>

                                <div className={styles.labelInput}>
                                    <label>LOGRADOURO</label>
                                    <div className={styles.separador}></div>
                                    <input type="text" className={styles.input} {...register("logradouro")}/>
                                </div>
                            </div>

                            <div className={styles.sideThirdStep}>
                                <div className={styles.labelInput}>
                                    <label>ESTADO</label>
                                    <div className={styles.separador}></div>
                                    <input type="text" className={styles.input} {...register("estadoCompany")}/>
                                </div>

                                <div className={styles.labelInput}>
                                    <label>BAIRRO</label>
                                    <div className={styles.separador}></div>
                                    <input type="text" className={styles.input} {...register("bairro")}/>
                                </div>

                                <div className={styles.labelInput}>
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

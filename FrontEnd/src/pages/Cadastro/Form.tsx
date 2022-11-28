import React from 'react'

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
    validateEmail,
    validatePassword,
    validateName,
    validateCPF,
    validateTelefone,
    validateCNPJ,
    validateEstado,
    validateCidade,
    validateRazaoSocial
} from '../../services/formValidate';


import { fetchStates } from '../../services/ibge';

import styles from './styles.module.css';
import signupImage from "../../assets/images/StepTwo-Signup.png";
import api from '../../services/api';

export default function Form() {

    const navigate = useNavigate();

    const routeChange = (path: string) => {
        navigate(path);
    }

    const {
        register,
        handleSubmit,
        setValue,
        setFocus,
    } = useForm();

    const [step, setStep] = useState(0);
    const [userType, setUserType] = useState<"" | "company" | "dev">("");
    const [validated, setValidated] = useState(false);

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [signUpCompanyData, setSignUpCompanyData] = useState({
        "email": "",
        "senha": "",
        "nome": "",
        "telefone": "",
        "cnpj": "",
        "estado": "",
        "cidade": "",
        "bairro": "",
        "endereco": "",
        "complemento": ""
    });

    const [signUpDevData, setSignUpDevData] = useState({
        "email": "",
        "senha": "",
        "nome": "",
        "telefone": "",
        "cpf": "",
        "estado": "",
        "cidade": "",
        "dataNascimento": "2000-01-10",
    });

    useEffect(() => {

        fetchStates().then(states => {
            setStates(states);

        }).catch(erro => {
            console.log(erro);
        })

    }, []);

    const onSubmitFirstStep = (e: any) => {


        if (validateEmail(e.email) === 'ok' && validatePassword(e.senha, e.confirmacao) === 'ok') {
            setValidated(true);
        }

        if (validateEmail(e.email) !== 'ok') {
            alert(validateEmail(e.email));
        }

        if (validatePassword(e.senha, e.confirmacao) !== 'ok') {
            alert(validatePassword(e.senha, e.confirmacao));
        }

        if (validated) {
            setSignUpCompanyData({ ...signUpCompanyData, email: signUpCompanyData.email = e.email, senha: signUpCompanyData.senha = e.senha });
            setSignUpDevData({ ...signUpDevData, email: signUpDevData.email = e.email, senha: signUpDevData.senha = e.senha });
            console.log(signUpDevData);
            setStep(step + 1);
        }

    };

    const onSubmitThirdStepDev = (e: any) => {
        if (validateName(e.nome) === "ok" && validateCPF(e.CPF) === "ok" && validateTelefone(e.telefone) === "ok") {
            let cpfFormated = e.CPF.replace(/[\s.-]*/igm, '');
            setSignUpDevData({
                ...signUpDevData,
                nome: signUpDevData.nome = e.nome,
                cpf: signUpDevData.cpf = cpfFormated,
                telefone: signUpDevData.telefone = e.telefone
            });
            setStep(step + 1);
            console.log(signUpDevData);
        } else if (validateName(e.nome) !== "ok") {
            alert(validateName(e.nome));
        } else if (validateCPF(e.CPF) !== "ok") {
            alert(validateCPF(e.CPF));
        } else if (validateTelefone(e.telefone) !== "ok") {
            alert(validateTelefone(e.telefone));
        }
    };

    const onSubmitThirdStepCompany = (e: any) => {
        if (validateRazaoSocial(e.nome) === "ok" && validateTelefone(e.telefone) === "ok" && validateCNPJ(e.CNPJ) === "ok") {
            let cnpjFormated = e.CNPJ.replace(/[^\d]+/g, '');
            setSignUpCompanyData({
                ...signUpCompanyData,
                nome: signUpCompanyData.nome = e.nome,
                telefone: signUpCompanyData.telefone = e.telefone,
                cnpj: signUpCompanyData.cnpj = cnpjFormated
            });
            setStep(step + 1);
            console.log(signUpCompanyData);
        } else if (validateRazaoSocial(e.nome) !== "ok") {
            alert(validateRazaoSocial(e.nome));
        } else if (validateTelefone(e.telefone) !== "ok") {
            alert(validateTelefone(e.telefone));
        } else if (validateCNPJ(e.CNPJ) !== "ok") {
            alert(validateCNPJ(e.CNPJ));
        }
    };

    const onSubmitFourthStepDev = async (e: any) => {
        if (validateEstado(e.estadoDev) === "ok") {
            setSignUpDevData({
                ...signUpDevData,
                estado: signUpDevData.estado = e.estadoDev,
                cidade: signUpDevData.cidade = e.cidadeDev
            });
            setStep(step + 1);
            console.log(signUpDevData);
            await api.post('/dev', signUpDevData)
                .then((resposta) => {
                    setStep(step + 1);
                    console.log(resposta);
                })
                .catch((error) => {
                    alert("Deu erro");
                    console.log(error);
                    setSignUpDevData({
                        ...signUpDevData,
                        email: signUpDevData.email = "",
                        senha: signUpDevData.senha = "",
                        nome: signUpDevData.nome = "",
                        telefone: signUpDevData.telefone = "",
                        cpf: signUpDevData.cpf = "",
                        cidade: signUpDevData.cidade = "",
                        estado: signUpDevData.estado = "",
                    });
                    setStep(0);
                });
        } else if (validateEstado(e.estadoDev) !== "ok") {
            alert(validateEstado(e.estadoDev))
        } else if (validateEstado(e.cidadeDev) !== "ok") {
            alert(validateCidade(e.cidadeDev))
        }

    };

    const onSubmitFourthStepCompany = async (e: any) => {
        if (validateEstado(e.estadoCompany) === "ok") {
            setSignUpCompanyData({
                ...signUpCompanyData,
                cidade: signUpCompanyData.cidade = e.cidadeCompany,
                estado: signUpCompanyData.estado = e.estadoCompany,
                bairro: signUpCompanyData.bairro = e.bairro,
                endereco: signUpCompanyData.endereco = `${e.logradouro}, ${e.numero}`,
            });

            console.log(signUpCompanyData);

            await api.post('/empresa', signUpCompanyData)
                .then((resposta) => {
                    setStep(step + 1);
                    console.log(resposta);
                })
                .catch((error) => {
                    alert("Deu erro");
                    console.log(error);
                    setSignUpCompanyData({
                        ...signUpCompanyData,
                        email: signUpCompanyData.email = "",
                        senha: signUpCompanyData.senha = "",
                        nome: signUpCompanyData.nome = "",
                        telefone: signUpCompanyData.telefone = "",
                        cnpj: signUpCompanyData.cnpj = "",
                        cidade: signUpCompanyData.cidade = "",
                        estado: signUpCompanyData.estado = "",
                        bairro: signUpCompanyData.bairro = "",
                        endereco: signUpCompanyData.endereco = "",
                    });
                    setStep(0);
                });
        } else {
            alert(validateEstado(e.estadoCompany))
        }
    };

    const handleInputStatesChange = (e: any) => {
        if (!e.target.value) return Promise.resolve([]);
        const state = e.target.value;
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`)
            .then(res => res.json()).then(cities => {
                setCities(cities);
            }).catch(erro => {
                console.log(erro);
            });
        const sorted = cities.sort((a, b) => {
            return b - a;
        });
        setCities(sorted);
    }

    const checkCEP = (e: any) => {
        if (!e.target.value) return;
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            setValue('estadoCompany', data.uf);
            setValue('cidadeCompany', data.localidade);
            setValue('logradouro', data.logradouro);
            setValue('bairro', data.bairro);
        }).catch((err) => {
            console.log(err)
            alert("Insira um cep válido");
        });
        setFocus('numero');
    }

    const renderForm = () => {
        if (step === 0) {
            return (
                <>
                    <div className={styles.cardContent}>
                        <form className={styles.formSignup} onSubmit={handleSubmit(onSubmitFirstStep)}>
                            <h1>cadastro</h1>
                            <div className={styles.labelInput}>
                                <label>EMAIL</label>
                                <div className={styles.separador}></div>
                                <input type="text" className={styles.input} {...register("email")} placeholder="exemplo@email.com" />
                            </div>
                            <div className={styles.labelInput}>
                                <label>SENHA</label>
                                <div className={styles.separador}></div>
                                <input type="password" className={styles.input} {...register("senha")} placeholder="*************" />
                            </div>
                            <div className={styles.labelInput}>
                                <label>CONFIRMAÇÃO DE SENHA</label>
                                <div className={styles.separador}></div>
                                <input type="password" className={styles.input} {...register("confirmacao")} placeholder="*************" />
                            </div>
                            <button
                                className={styles.submit}
                            >
                                CONTINUAR
                            </button>
                        </form>
                    </div>
                </>
            )
        } else if (step === 1) {
            return (
                <>
                    <div className={styles.titleDevOrCompany}>
                        <h2>Empresa ou Desenvolvedor?</h2>
                        <div className={styles.separador}></div>
                        <h3>Você atuará como desenvolvedor ou como contratante na FindDev?</h3>
                    </div>
                    <div className={styles.imgStepTwo}>
                        <img src={signupImage} alt="" />
                    </div>
                    <div className={styles.devOrCompany}>
                        <div
                            onClick={() => {
                                setUserType("company");
                                setStep(step + 1)
                            }}
                            className={styles.selectionEmpresa}>
                            EMPRESA
                        </div>
                        <div
                            onClick={() => {
                                setUserType("dev");
                                setStep(step + 1)
                            }}
                            className={styles.selectionDev}>
                            DESENVOLVEDOR
                        </div>
                    </div>
                </>
            )
        } else if (step === 2 && userType === "dev") {
            return (
                <>
                    <h1 className={styles.titleStepTwo}>CADASTRO</h1>
                    <form className={styles.formSignup} onSubmit={handleSubmit(onSubmitThirdStepDev)}>
                        <div className={styles.labelInput}>
                            <label>NOME</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("nome")} />
                        </div>
                        <div className={styles.labelInput}>
                            <label>CPF</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("CPF")} />
                        </div>
                        <div className={styles.labelInput}>
                            <label>TELEFONE</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("telefone")} placeholder="(11) 912345678" />
                        </div>
                        <button
                            className={styles.submit}
                        >
                            CONTINUAR
                        </button>
                    </form>
                </>
            )
        } else if (step === 2 && userType === "company") {
            return (
                <>
                    <h1 className={styles.titleStepTwo}>CADASTRO</h1>
                    <form className={styles.formSignupThridStepCompany} onSubmit={handleSubmit(onSubmitThirdStepCompany)}>
                        <div className={styles.labelInput}>
                            <label>RAZÃO SOCIAL</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("nome")} />
                        </div >
                        <div className={styles.labelInput}>
                            <label>TELEFONE</label>
                            <div className={styles.separador}></div>
                            <input type="text" className={styles.input} {...register("telefone")} placeholder="(XX) XXXX-XXXX" />
                        </div>
                        <div className={styles.labelInput}>
                            <label>CNPJ</label>
                            <div className={styles.separador}></div>
                            <input placeholder='XX. XXX. XXX/0001-XX' type="text" className={styles.input} {...register("CNPJ")} />
                        </div>
                        <button
                            className={styles.submit}
                        >
                            CONTINUAR
                        </button>
                    </form >
                </>
            )
        } else if (step === 3 && userType === "dev") {
            return (
                <>
                    <h1 className={styles.titleStepTwo}>CADASTRO</h1>
                    <form className={styles.formSignupThridStepCompany} onSubmit={handleSubmit(onSubmitFourthStepDev)}>
                        <div className={styles.labelInput}>
                            <label htmlFor="state">ESTADO</label>
                            <div className={styles.separador}></div>
                            <select className={styles.selectBox} id="state" {...register("estadoDev")} onChange={handleInputStatesChange}>
                                <option value="" selected disabled>Selecione um estado...</option>
                                {states.map((state) => {
                                    const { sigla, nome } = state;
                                    return (<option key={sigla} value={sigla} >{nome}</option>)
                                })}
                            </select>
                        </div>

                        <div className={styles.labelInput}>
                            <label htmlFor="city">CIDADE</label>
                            <div className={styles.separador}></div>
                            <select className={styles.selectBox} id="city" {...register("cidadeDev")}>
                                <option value="" selected disabled>Selecione uma cidade...</option>
                                {cities.map((city) => {
                                    const { id, nome } = city;
                                    return (<option key={id} value={nome}>{nome}</option>)
                                })}
                            </select>
                        </div>
                        <button
                            className={styles.submit}
                        >
                            CONTINUAR
                        </button>
                    </form >
                </>
            )
        } else if (step === 3 && userType === "company") {
            return (
                <>
                    <h1 className={styles.titleStepTwo}>CADASTRO</h1>
                    <form className={styles.formSignupThridStepCompany} onSubmit={handleSubmit(onSubmitFourthStepCompany)}>
                        <div className={styles.thirdStepContent}>
                            <div className={styles.sideThirdStep}>
                                <div className={styles.labelInput}>
                                    <label>CEP</label>
                                    <div className={styles.separador}></div>
                                    <input placeholder='00000-000' type="text" className={styles.input} {...register("cep")} onBlur={checkCEP} />
                                </div>

                                <div className={styles.labelInput}>
                                    <label>CIDADE</label>
                                    <div className={styles.separador}></div>
                                    <input placeholder='ex: São Paulo' type="text" className={styles.input} {...register("cidadeCompany")} />
                                </div>

                                <div className={styles.labelInput}>
                                    <label>LOGRADOURO</label>
                                    <div className={styles.separador}></div>
                                    <input placeholder='ex: avenida' type="text" className={styles.input} {...register("logradouro")} />
                                </div>
                            </div>

                            <div className={styles.sideThirdStep}>
                                <div className={styles.labelInput}>
                                    <label>UF</label>
                                    <div className={styles.separador}></div>
                                    <input placeholder='ex: SP' type="text" className={styles.input} {...register("estadoCompany")} />
                                </div>

                                <div className={styles.labelInput}>
                                    <label>BAIRRO</label>
                                    <div className={styles.separador}></div>
                                    <input placeholder='ex: vila maria' type="text" className={styles.input} {...register("bairro")} />
                                </div>

                                <div className={styles.labelInput}>
                                    <label>NÚMERO</label>
                                    <div className={styles.separador}></div>
                                    <input placeholder='ex: 300' type="text" className={styles.input} {...register("numero")} />
                                </div>
                            </div>

                        </div>
                        <button
                            className={styles.submit}
                        >
                            CONTINUAR
                        </button>
                    </form>
                </>
            )
        } else {
            return (
                <>
                    <div className={styles.finalCardSignup}>
                        <h1 className={styles.titleFinalCardSignup}>PARABÉNS</h1>
                        <div className={styles.separador}></div>
                        <h3>SEU CADASTRO FOI REALIZADO COM SUCESSO</h3>
                        <button
                            onClick={() => routeChange("/login")}
                            className={styles.finalSubmit}
                        >
                            COMECE SUA JORNADA
                        </button>
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

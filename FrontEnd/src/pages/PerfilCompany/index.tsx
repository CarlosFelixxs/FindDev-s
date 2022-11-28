import HeaderLogado from '../../shared/components/HeaderLogado/Index';
import styles from './styles.module.css'
import FotoPerfil from "../../assets/images/DevPerfil.png";
import { RateComponent } from '../../shared/components/RateComponent';
import checkIcon from "../../assets/images/check.png";
import editIcon from "../../assets/images/edit-3.png";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';


export default function PerfilCompany() {

  const [editavel, setEditavel] = useState(false);
  
  const [nome, setNome] = useState("");
  const [sigla,setSigla] = useState("");  
  const [biografia,setBiografia] = useState("");  
  const [titulo,setTitulo] = useState("");  
  const [estado,setEstado] = useState("");  
  const [cidade,setCidade] = useState("");
  const [endereco,setEndereco] = useState("");
  const [idPerfil, setIdPerfil] = useState("");  
  const [telefone, setTelefone] = useState("");  
  const [rating,setRating] = useState(0);
  
  const navigate = useNavigate();

  const routeChanger = (path: string) => {
    navigate(path);
  }

  useEffect(() => {
    api.get(`/empresa/${sessionStorage.getItem("idUser")}`)
    .then((resposta) => {
        console.log(resposta);
        console.log('teste');
        
        let data = resposta.data;
        setNome(data.nome);
        setSigla(data.nome.substr(0,2));
        setBiografia(data.perfil.descricao);
        setTitulo(data.perfil.titulo);
        setEstado(data.estado);
        setCidade(data.cidade);
        setEndereco(data.endereco);
        setIdPerfil(data.perfil.idPerfil);
        setTelefone(data.telefone);
    })
    .catch((error) => {
        console.log(error)
    });

}, [biografia])

  let putUser = {
    "idUsuario" : `${sessionStorage.getItem("idUser")}`,
      "descricao": `${biografia}`,
      "titulo" : `${titulo}`
  }

  const submitBio = () => {
    console.log("Começou a função");
    
    api.put(`/user/profile-update`, putUser)
    .then((resposta) => {
        console.log(resposta);     
        alert("Perfil atualizado!")   
        const data = resposta.data;
    })
    .catch((error) => {
      alert("Deu erro")
        console.log(error)
    });
    setEditavel(false);
  }

  return (
    <>
      <HeaderLogado />
      <section className={styles.container}>
        <div className={styles.contInfo}>
          <div className={styles.info}>
            <img className={styles.imgInfo} src={FotoPerfil} alt="imagem do banner" />
            <span className={styles.textInfo}>
              <h1>{nome}</h1>
              <h6>{titulo}</h6>
            </span>
            <RateComponent rating={4} />
          </div>
        </div>

        <section className={styles.sectionBio}>
          <div className={styles.contBio}>
            <div className={styles.icon}>
              <h1>biografia</h1>
              <div>
                <img src={editIcon} alt="" style={{ cursor: 'pointer'}} onClick={() => setEditavel(true)} />
                <img src={checkIcon} alt="" style={{ cursor: 'pointer'}} onClick={submitBio} />
              </div>
            </div>
            <div className={styles.bio}>
              <textarea
                maxLength={1000}
                placeholder={biografia === "" ? 'Conte um pouco sobre a sua empresa' : biografia}
                className={editavel ? styles.inputBioEnable : "input-bio-disable"}
                disabled={!editavel}
                onChange={(e) => setBiografia(e.target.value)}
                defaultValue={biografia}
              />
            </div>
          </div>
          <div className={styles.contLoc}>
            <h1>localização</h1>
            <div className={styles.loc}>
              <div className={styles.insideLoc}>
                <li>{estado}</li>
                <li>{cidade}</li>
                <li>{endereco}</li>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionComp}>
          <div className={styles.contButtons}>
            <div>
              <button onClick={() => routeChanger("/vagas-publicadas")}>vagas em aberto</button>
            </div>
            <div>
              <button onClick={() => routeChanger("/colaboradores")}>colaboradores</button>
            </div>
            <div>
              <button onClick={() => routeChanger("/")}>contratar</button>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
function routeChanger(arg0: string): void {
  throw new Error('Function not implemented.');
}


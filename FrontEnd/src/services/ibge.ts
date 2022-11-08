// https://servicodados.ibge.gov.br/api/v1/localidades/estados

const BASE_URL = "https://servicodados.ibge.gov.br/api/v1";

export const fetchStates = () => {
    const url = `${BASE_URL}/localidades/estados`;
    return fetch(url).then(res => res.json());
}

export const fetchCities = (state : string) => {
    const url = `${BASE_URL}/localidades/estados/${state}/municipios`;
    return fetch(url).then(res => res.json());
}
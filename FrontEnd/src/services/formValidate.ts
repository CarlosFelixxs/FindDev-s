export const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
        return "Insira um email válido";
    }

    return "ok";
}

export const validatePassword = (password: string, confirmacao: string) => {
    const re = /((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;

    if (password.length < 4 || password.length > 31) {
        return "A senha deve conter de 5 a 30 caracteres"
    }
    if (password !== confirmacao) {
        return "As senhas não conferem";
    }

    if (!re.test(password)) {
       return "É necessario uma letra maiuscula, minuscula, caracter especial e um numero";
    }

    return "ok";
}

export const validateName = (nome: string) => {
    if (nome.length <= 2) {
        return "Insira um nome Válido";
    }

    return "ok";
}

export const validateCPF = (cpf : string) => {
    if (typeof cpf !== "string") return "Insira um CPF válido"
    cpf = cpf.replace(/[\s.-]*/igm, '')
    if (
        !cpf ||
        cpf.length !== 11 ||
        cpf === "00000000000" ||
        cpf === "11111111111" ||
        cpf === "22222222222" ||
        cpf === "33333333333" ||
        cpf === "44444444444" ||
        cpf === "55555555555" ||
        cpf === "66666666666" ||
        cpf === "77777777777" ||
        cpf === "88888888888" ||
        cpf === "99999999999" 
    ) {
        return "Insira um CPF válido"
    }
    let soma = 0
    let resto
    for (let i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto === 10) || (resto === 11))  resto = 0
    if (resto !== parseInt(cpf.substring(9, 10)) ) return "Insira um CPF válido"
    soma = 0
    for (let i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto === 10) || (resto === 11))  resto = 0
    if (resto !== parseInt(cpf.substring(10, 11) ) ) return "Insira um CPF válido"
    return "ok"
}

export const validateCNPJ = (cnpj : string) => {
   cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj === '') return false;
     
    if (cnpj.length !== 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj === "00000000000000" || 
        cnpj === "11111111111111" || 
        cnpj === "22222222222222" || 
        cnpj === "33333333333333" || 
        cnpj === "44444444444444" || 
        cnpj === "55555555555555" || 
        cnpj === "66666666666666" || 
        cnpj === "77777777777777" || 
        cnpj === "88888888888888" || 
        cnpj === "99999999999999")
        return false;
           
    return "ok";
  }


export const validateTelefone = (telefone: any) => {
    telefone = telefone.replace(/\D/g, '');

    //verifica se tem a qtde de numero correto
    if (!(telefone.length >= 10 && telefone.length <= 11)) return "Insira um telefone válido";

    //Se tiver 11 caracteres, verificar se começa com 9 o celular
    if (telefone.length === 11 && parseInt(telefone.substring(2, 3)) !== 9) return "Insira um telefone válido";

    //DDDs validos
    const codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
        21, 22, 24, 27, 28, 31, 32, 33, 34,
        35, 37, 38, 41, 42, 43, 44, 45, 46,
        47, 48, 49, 51, 53, 54, 55, 61, 62,
        64, 63, 65, 66, 67, 68, 69, 71, 73,
        74, 75, 77, 79, 81, 82, 83, 84, 85,
        86, 87, 88, 89, 91, 92, 93, 94, 95,
        96, 97, 98, 99];
    //verifica se o DDD é valido
    if (codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) === -1) return "Insira um DDD válido";


    //se passar por todas as validações acima, então está tudo certo
    return "ok";
}
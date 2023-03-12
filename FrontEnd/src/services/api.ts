import axios from 'axios';

const api = axios.create({
  baseURL: "http://34.224.112.21:8080/api/v1"
})

export default api;

// export const signIn = async (email: string, password: string) => {

//   const login = {
//     emailLogin: email,
//     passwordLogin: password,
//   }

//   try {
//       const signIn = await axios.post(`http://localhost:8080/api/v1/user/login`, login )
//       return signIn
//   }
//   catch (err: any) {
//       return err
//   }
// }
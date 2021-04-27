import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export default api;

// class Api {
//   constructor() {
//     this.api = axios.create({
//       baseURL: "http://localhost:5000/",
//     });
//   }

//   login = async (payload) => {
//     try {
//       const { data } = await this.api.post("auth/login", payload);
//       const { token } = data;
//       localStorage.setItem("token", token);
//     } catch (error) {
      
}
//   };
// }

// export default new Api();

import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/",
// });

// export default api;

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5000",
    });
  }

  login = async (payload) => {
    try {
      const { data } = await this.api.post("/auth/login", payload);
      const { token } = data;
      localStorage.setItem("token", token);
    } catch (error) {}
  };

  getProduct = async (id) => {
    try {
      const response = await this.api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
}

export default new Api();

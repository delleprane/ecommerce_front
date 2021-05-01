import axios from "axios";

// Heroku do back = https://loja-ironfit.herokuapp.com/

// Heroku front = https://loja-ironfitness.herokuapp.com/

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:5000",
    });
  }

  login = async (payload) => {
    try {
      const { data } = await this.api.post("/auth/login", payload);
      const { token, id, name } = await data;
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      localStorage.setItem("name", name);
      window.location.href = "/profile";
    } catch (error) {}
  };

  addAddress = async (id, data) => {
    try {
      const response = await this.api.post(
        "/perfil/" + id + "/createaddress",
        data
      );
      if (response.status === 201) {
        window.location.href = "/profile";
      } else {
        alert("Erro ao cadastrar o endereço!");
      }
    } catch (error) {}
  };

  addUser = async (data) => {
    try {
      const response = await this.api.post("/auth/signup", data);
      if (response.status === 201) {
        const { email, password } = data;
        const payload = {
          email: email,
          password: password,
        };
        try {
          const { data } = await this.api.post("/auth/login", payload);
          const { token, id, name } = await data;
          localStorage.setItem("token", token);
          localStorage.setItem("id", id);
          localStorage.setItem("name", name);
          window.location.href = "/profile";
        } catch {
          alert("Erro ao cadastrar o endereço!");
        }
      } else {
        alert("Erro ao cadastrar o endereço!");
      }
    } catch (error) {}
  };

  getProduct = async (id) => {
    try {
      const response = await this.api.get(`/products/${id}`);
      return response.data.product;
    } catch (error) {
      console.error(error);
    }
  };

  getProfile = async () => {
    try {
      const id = await localStorage.getItem("id");
      const response = await this.api.get(`/perfil/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  getAddress = async () => {
    try {
      const id = await localStorage.getItem("id");
      const response = await this.api.get(`/perfil/address/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  getProducts = async () => {
    try {
      const response = await this.api.get(`/products/`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  getCart = async () => {
    try {
      const id = localStorage.getItem("id");
      const response = await this.api.get(`/carrinho/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  finishCart = async (idCart) => {
    try {
      const response = await this.api.patch(`/carrinho/finalizar/${idCart}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  removeProduct = async (idCart, idProduct) => {
    try {
      const response = await this.api.patch(
        `/carrinho/${idCart}/products/${idProduct}/delete`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
}

export default new Api();

import axios from "axios";
class Api {
   constructor() {
      this.api = axios.create({

         //baseURL: "http://localhost:5000/",
         baseURL: "https://loja-ironfit.herokuapp.com/",
      });
   }

   login = async (payload) => {
      try {
         const { data } = await this.api.post("/auth/login", payload);
         const { token, id, name } = await data;
         localStorage.setItem("token", token);
         localStorage.setItem("id", id);
         localStorage.setItem("name", name);
         // this.api.headers.post['Authorization'] = 'Bearer ' + data.token
         window.location.href = "/profile";
      } catch (error) { }
   };

   addItemInCart = async (idUser, idProduct) => {
      try {
         const cartOfUser = await this.api.get('/carrinho/' + idUser);
         if (cartOfUser.status === 200) {
            const idCartofUser = cartOfUser.data._id
            try {
               const cartOfUser = await this.api.patch('/carrinho/' + idCartofUser + '/product/' + idProduct);
               if (cartOfUser.status === 200) {
                  alert('Produto adicionado ao carrinho!')
               } else {
                  alert('Erro ao inserir produto no carrinho!')
               }
            } catch (error) {
               console.error(error)
            }
         } else {
            alert('Erro ao adicionar item no carrinho!')
         }
      } catch (error) {
         console.error(error)
      }
   };

   deleteAddress = async (id) => {
      try {
         await this.api.delete("/perfil/" + id);
         window.location.reload()
      } catch (error) { console.log(error) }
   }

   //  deleteAddress = async (id) => {
   //   try {
   //    await this.api.delete("/perfil/" + id);
   // window.location.reload();
   //} catch (error) { }
   // };


   addAddress = async (id, data) => {
      try {
         const response = await this.api.post('/perfil/' + id + '/createaddress', data);
         if (response.status === 201) {
            window.location.href = '/profile'
         } else {
            alert('Erro ao cadastrar o endereço!')
         }
      } catch (error) { console.log(error) }
   };

   // addAddress = async (id, data) => {
   // try {
   //  const response = await this.api.post(
   //  "/perfil/" + id + "/createaddress",
   //data
   //);
   //if (response.status === 201) {
   //window.location.href = "/profile";
   //} else {
   //alert("Erro ao cadastrar o endereço!");
   //}
   //} catch (error) { }
   //};

   updateAddress = async (id, data) => {
      try {
         const response = await this.api.patch('/perfil/' + id, data);
         if (response.status === 201) {
            window.location.href = '/profile'
         } else {
            alert('Erro ao cadastrar o endereço!')
         }
      } catch (error) { console.log(error) }
   };

   // updateAddress = async (id, data) => {
   // try {
   // const response = await this.api.patch("/perfil/" + id, data);
   //if (response.status === 201) {
   // window.location.href = "/profile";
   //} else {
   //alert("Erro ao cadastrar o endereço!");
   //}
   //} catch (error) { }
   //};


   addUser = async (data) => {
      try {
         const response = await this.api.post('/auth/signup', data);

      } catch (error) {
         console.log(error)
      }
   }


   getProduct = async (id) => {
      try {
         const idProduct = id
         const response = await this.api.get(`/products/`);
         const arrayProducts = response.data
         const responseItemFind = await arrayProducts.find(arrayProducts => arrayProducts._id === idProduct)
         return responseItemFind;
      } catch (error) {
         console.error(error);
      }
   };

   // getProduct = async (id) => {
   //  try {
   //   const idProduct = id;
   //  const response = await this.api.get(`/products/`);
   //const arrayProducts = response.data;
   //const responseItemFind = await arrayProducts.find(
   // (arrayProducts) => arrayProducts._id === idProduct
   //);
   // return responseItemFind;
   //} catch (error) {
   // console.error(error);
   //}
   //};



   getAddressById = async (idAddress) => {
      try {
         const idUser = await localStorage.getItem('id')
         const response = await this.api.get(`/perfil/address/${idUser}`);
         let arrayAddress = response.data;
         const responseItemFind = await arrayAddress.find(arrayAddress => arrayAddress._id === idAddress)
         return responseItemFind;
      } catch (error) {
         console.error(error);
      }
   };

   // getAddressById = async (idAddress) => {
   //  try {
   //   const idUser = await localStorage.getItem("id");
   // const response = await this.api.get(`/perfil/address/${idUser}`);
   //let arrayAddress = response.data;
   //const responseItemFind = await arrayAddress.find(
   // (arrayAddress) => arrayAddress._id === idAddress
   //);
   //return responseItemFind;
   //} catch (error) {
   // console.error(error);
   //}
   //};

   getProducts = async () => {
      try {
         const response = await this.api.get(`/products/`);
         return response.data;
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

   //  getProfile = async () => {
   //   try {
   //    const id = await localStorage.getItem("id");
   //  const response = await this.api.get(`/perfil/${id}`);
   //return response.data;
   //} catch (error) {
   // console.error(error);
   //}
   //};


   /*  getProducts = async () => {
       try {
          const response = await this.api.get(`/products/`);
          return response.data;
       } catch (error) {
          console.error(error);
       }
    };
  */
  /*  getProducts = async () => {
      try {
         const response = await this.api.get(`/products/`);
         return response.data;
      } catch (error) {
         console.error(error);
      }
   }; */


   getAddress = async () => {
      try {
         const id = await localStorage.getItem("id");
         const response = await this.api.get(`/perfil/address/${id}`);
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

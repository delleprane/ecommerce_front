import React, { Component } from "react";
import api from "../../services/api";
import '../../App.css'

class oneProd extends Component {
   state = {
      product: {},
   };

   urlCapture = () => {
      var url = window.location.href;
      url = url.split('product/');
      url = url[1];
      return url
   }


   componentDidMount = async () => {
      try {
         const idProduct = this.urlCapture()
         const product = await api.getProduct(idProduct);
         this.setState({ product });
      } catch (error) {
         console.error(error);
      }

   };

   handleAddItemInCart = async () => {
      const idProduct = this.state.product._id
      const idUser = localStorage.getItem('id')
      await api.addItemInCart(idUser, idProduct);
   }

   render() {
      const { product } = this.state;
      return (
         <div className="product">
            <br /><br />
            <h1>{product.name}</h1>
            <br /><br />
            <img src={product.image} alt={product.name} />
            <br /><br />
        Descrição:{product.description}
            <br /><br />
        Preço:
        R${product.value},00
            <br /><br />
            <button onClick={this.handleAddItemInCart}>
               Adicionar no Carrinho</button>
         </div>
      );
   }
}

export default oneProd;

import React, { Component } from "react";
import api from "../../services/api";
import '../../App.css'

class oneProd extends Component {
   state = {
      product: {},
   };

   componentDidMount = async () => {
      try {
         const product = await api.getProduct(this.props.match.params.idproduct);
         this.setState({ product });
      } catch (error) {
         console.error(error);
      }

   };

   handleAddItemInCart = async () => {
      const idProduct = this.state.product._id
      const idUser =  localStorage.getItem('id')
      await api.addItemInCart(idUser, idProduct);
   }

   render() {
      const { product } = this.state;
      return (
         <div>
            <h1>one product</h1>

            {product.name}
            {product.description}
            {product.value}
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

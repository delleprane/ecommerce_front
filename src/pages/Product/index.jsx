import React, { Component } from "react";
import api from "../../services/api";
import '../../App.css'

class index extends Component {
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

   render() {
      const { product } = this.state;
      return (
         <div className="product" >
            <br /><br />
            <h1>{product.name}</h1>
            <br /><br />
            <img src={product.image} alt={product.name} />
            <br /><br />
        Descrição:{product.description}
            <br /><br />
        Preço:
        R${product.value},00
         </div>
      );
   }
}

export default index;

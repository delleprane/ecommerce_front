import React, { Component } from 'react';
import api from '../../services/api';

class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
         product: []
      };
   }

   async componentDidMount() {
      const response = await api.get('/products/');
      this.setState({ product: response.data })


   }

   render() {
      const { product } = this.state
      console.log(product.name)

      return (
         <div>

            <h1>Produtos</h1>
            {product.map(product => (
               <li key={product.id}>
                  {product.image}
                  {product.name}
                  R${product.value}
               </li>
            ))}


         </div>
      );
   };
};

export default Home


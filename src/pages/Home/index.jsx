import React, { Component } from 'react';
import api from '../../services/api';
import './Product.css'

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
            <div className='container'>

               <div className='product-list' >
                  {product.map(product => (
                     <div className='product-item' key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <div className='name'>{product.name}</div>
                        <div className='value'>R${product.value}</div>
                     </div>
                  ))}
               </div>

            </div>



         </div>
      );
   };
};

export default Home


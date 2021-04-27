import React, { Component } from "react";
// import api from "../services/api.jsx"

class Products extends Component {
  state = {
    products: [],
  };

  // componentDidMount = async() => {
  //   const products = await.getAllProducts();
  //   this.setState({
  //     products: products
  //   })
  // }

  render() {
    return (
      <div>
        <h1>Products</h1>
      </div>
      // <div>
      //  {this.state.products.map(products => {
      //    return <h2>{products.title}</h2>
      //  })}
      // </div>
    );
  }
}

export default Products;

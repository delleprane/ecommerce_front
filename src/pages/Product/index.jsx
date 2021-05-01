import React, { Component } from "react";
import api from "../../services/api";

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

  render() {
    const { product } = this.state;
    return (
      <div>
        <h1>one product</h1>

        {product.name}
        {product.description}
        {product.value}
        <img src={product.image} alt={product.name} />

        <button>Adicionar ao Carrinho</button>
      </div>
    );
  }
}

export default oneProd;

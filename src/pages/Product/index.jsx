import React, { Component } from "react";
import api from "../../services/api";

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
    const { product } = this.state
    return (
      <div>
        <h1>one product</h1>

        {product.name}
        {product.description}
        {product.value}
      </div>
    );
  }
}

export default index;

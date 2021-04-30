import React, { Component } from "react";
import api from "../../services/api";
import "./Product.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.getProducts();
    this.setState({ products: response });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <h1>Produtos</h1>
        <div className="container">
          <div className="product-list">
            {products.map((product) => (
              <div className="product-item" key={product._id}>
                <img src={product.image} alt={product.name} />
                <div className="name">{product.name}</div>
                <div className="value">R${product.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

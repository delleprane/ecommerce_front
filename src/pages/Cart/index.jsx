import React, { Component } from "react";
import api from "../../services/api";

class Cart extends Component {
  state = {
    products: [],
    cart: {},
  };

  componentDidMount = async () => {
    this.updateCart();
  };

  updateCart = async () => {
    try {
      const cart = await api.getCart();
      this.setState({
        products: cart.products,
        cart: cart,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // REMOVE PRODUTO DO CARRINHO
  removeProduct = async (idProduct) => {
    try {
      await api.removeProduct(this.state.cart._id, idProduct);
      this.updateCart();
    } catch (error) {
      console.error(error);
    }
  };

  //FINALIZAR COMPRA
  finished = async () => {
    try {
      await api.finishCart(this.state.cart._id);
      this.props.history.push({
        pathname: "/resumecart",
        state: this.state.cart,
      });
    } catch (error) {}
  };

  render() {
    return (
      <div>
        <div>
          <h1> CARRINHO </h1>
          {this.state.products.map((product) => (
            <div className="product-item" key={product._id}>
              <img src={product.image} />
              <h3 className="name"> {product.name} </h3>
              <h4 className="value"> R$ {product.value} </h4>
              <div>
                <button onClick={() => this.removeProduct(product._id)}>
                  REMOVE
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2> TOTAL </h2>
          Total $
          {this.state.products.reduce((acc, product) => {
            return acc + product.value;
          }, 0)}
        </div>
        <div>
          <button onClick={this.finished}> Finalizar compra </button>{" "}
        </div>
      </div>
    );
  }
}

export default Cart;

import React, { Component } from "react";

class finishedCart extends Component {
  state = {
    cart: this.props.location.state,
  };

  render() {
    return (
      <div>
        <h1>Finished Cart</h1>
        {this.state.cart.products.map((product) => (
          <div className="product-item" key={product._id}>
            <img src={product.image} />
            <h3 className="name"> {product.name} </h3>
            <h4 className="value"> R$ {product.value} </h4> <div></div>
          </div>
        ))}
        <div>
          <h2> TOTAL </h2>
          Total $
          {this.state.cart.products.reduce((acc, product) => {
            return acc + product.value;
          }, 0)}
        </div>
      </div>
    );
  }
}

export default finishedCart;

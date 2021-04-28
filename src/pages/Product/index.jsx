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
    } catch (error) {}
  };

  render() {
    return (
      <div>
        <h1>one product</h1>
      </div>
    );
  }
}

export default index;

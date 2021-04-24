import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // await api.login(this.state);
      // this.props.handleLogin(true);
      this.props.history.push("/products");
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <span style={styleLogin}>
          <h1 className="login">LOGIN</h1>
        </span>

        <form>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInput}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
          />
          <button type="submit" onClick={this.handleSubmit}>
            ENTRAR
          </button>
        </form>
      </div>
    );
  }
}

const styleLogin = {
  color: "red",
};

export default Login;

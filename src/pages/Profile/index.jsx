import React, { Component } from "react";
import api from "../../services/api";
class Profile extends Component {
  state = {
    profile: [],
  };

  //Lembrar de pegar ID no localStorage
  async componentDidMount() {
    const response = await api.get("perfil/606d07330b45613d1c9ee0cc");
    console.log(response);
    this.setState({ profile: response.data });
  }

  render() {
    const { profile } = this.state;

    return (
      <div>
        <h1>Perfil</h1>
        {profile.name}
        {profile.email}
        {profile.email}
      </div>
    );
  }
}

export default Profile;

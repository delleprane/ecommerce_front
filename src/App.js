import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Product from "./pages/Product/index";

import Navbar from "./components/NavBar/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/product/:idproduct" component={Product} />
        <Route path="/" render={() => <h1>Not found 404!</h1>} />
      </Switch>
    </div>
  );
}

export default App;

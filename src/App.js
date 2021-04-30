import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Login";
import Profile from "./pages/Profile";
import AddAdress from "./pages/Register/Address";
import Product from "./pages/Product/index";
import Cart from "./pages/Cart/index.jsx";
import Navbar from "./components/NavBar/Navbar.jsx";
import "./App.css";
import FinishedCart from "./pages/FinishedCart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/addAddress" component={AddAdress} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/product/:idproduct" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/resumecart" component={FinishedCart} />
        <Route path="*" render={() => <h1>Not found 404!</h1>} />
      </Switch>
    </div>
  );
}

export default App;

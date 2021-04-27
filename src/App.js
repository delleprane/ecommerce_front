import "./App.css";
import Navbar from "./components/NavBar/Navbar.jsx";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/products" component={Products} />
        <Route path="/perfil/favorites" component={Favorites} />
      </Switch>
    </div>
  );
}

export default App;

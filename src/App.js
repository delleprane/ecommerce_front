import "./App.css";
import Navbar from "./components/NavBar/Navbar.jsx";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </div>
  );
}

export default App;

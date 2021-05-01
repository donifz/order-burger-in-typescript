import './App.css';
import Menu from './Menu';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BurgerEdit from "./BugerEdit";
import { Navbar } from 'react-bootstrap';
import BurgerCart from './BurgerCart';



function App() {

  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand  >
            <Link style={{ color: "#fff" }} to="/">Burger menu</Link>
          </Navbar.Brand>
          <div className="d-flex align-items-center justify-content-end w-100"> <Link to="/burger-cart"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" className="bi bi-cart4 pe-auto" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg></Link>
          </div>
        </Navbar>
        <Switch>
          <Route exact path={"/"} render={() => <Menu />} />
          <Route exact path={"/burger-detail/:id"} render={({ match }) => <BurgerEdit match={match} />} />
          <Route exact path={"/burger-cart"} render={() => <BurgerCart />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

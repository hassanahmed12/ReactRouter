import React from 'react';
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from './components/Shop';
import Aboutus from "./components/Aboutus"
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
  <div>
    <Nav className="Navbar"> </Nav>
    <Switch>
    <Route path="/"  exact component={Home}></Route>
    <Route path="/Shop" component={Shop}></Route>
    <Route path="/Aboutus" component={Aboutus}></Route>
       </Switch>
  </div>    </BrowserRouter>)
}

export default App;

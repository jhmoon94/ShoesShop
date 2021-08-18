import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import fetch from 'node-fetch'
import { Route, Link, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react'
import {Navbar, Container, Nav, NavDropdown , Row, Col} from 'react-bootstrap';
import ShoesData from './data.js';
import Map from './Map.js'
import Detail from './Detail.js';
import NavBar from './NavBar.js';
import Jumbotron from './Jumbotron.js';
import Buttons from './Buttons.js'


function App() {

  let [shoes, setShoes] = useState(ShoesData)
  let [fetched, setFetched] = useState(false)
  let [stock, setStock] =useState([10],[11],[12])

  return (
    <div className="App">
    <NavBar />
      <Switch>
        <Route exact path="/">
          <Jumbotron />
          <Map shoes={ shoes } fetched={ fetched }/>

          <Buttons shoes={shoes} setShoes={setShoes} fetched={fetched} setFetched={setFetched} shoesData={ShoesData} />
        </Route>
        <Route path="/detail/:id">
          <Detail  shoes={ shoes } setShoes={setShoes} stock={ stock } shoesData={ShoesData}></Detail>
          {/* 데이터 바인딩 */}
        </Route>
        <Route path="/event">
          <div>This is event page</div>
        </Route> 
        <Route path="/event/helloworld" component={HelloWorld}>
        </Route>
      </Switch>
      <Route path="/:id">
        <p>url에 아무거나 적었을 때 이거 보여준다</p>
      </Route>
    </div>
  );
}

function HelloWorld() {
  return (
    <p>Hello, world!</p>
  )
}

export default App;

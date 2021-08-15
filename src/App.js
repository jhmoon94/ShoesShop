import logo from './logo.svg';
import './App.css';
import {Navbar, Container, Nav, NavDropdown , Row, Col} from 'react-bootstrap';
import { Route, Link, Switch } from 'react-router-dom';
import { useState } from 'react'
import ShoesData from './data.js';
import ShoesItem from './ShoesItem.js';
import Detail from './Detail.js';
import NavBar from './NavBar.js';
import Jumbotron from './Jumbotron.js';


function App() {

  let [shoes, setShoes] = useState(ShoesData)

  return (
    <div className="App">
    <NavBar />
      <Switch>
        <Route exact path="/">
        <Jumbotron />
        <Container>
          <Row>
            { 
              shoes.map((x, i)=>{
                return(
                  <ShoesItem shoes = { shoes[i] } i = { i } key = { i }> </ ShoesItem>
                )
              })
            } 
            {/* shoesItem 컴포넌트에서 map을 사용하여 컴포넌트 태그를 하나만 사용하는 방법도 있다 */}
          </Row>
        </Container>
        </Route>
        <Route path="/detail/:id">
          <Detail  shoes={ shoes }></Detail>
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

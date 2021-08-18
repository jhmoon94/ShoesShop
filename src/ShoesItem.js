import {Navbar, Container, Nav, NavDropdown , Row, Col} from 'react-bootstrap';

function ShoesItem (props) {
  return (
        <Col md={ 4 }>
          <img src={ `https://jhmoon94.github.io/shop/shoes${props.shoes.id + 1}.jpg` } width="100%" />
          <h4>{ props.shoes.title }</h4>
          <p>{ props.shoes.content} & {props.shoes.price }</p>
        </Col>
  )
}

// 컴포넌트 하나만 사용하여 map을 적용하는 경우
// function ShoesItem (props) {
//     return (
//       props.shoes.map((x, i)=>{
//         let src = `https://codingapple1.github.io/shop/shoes${i + 1}.jpg`;
//         return (
//           <Col>
//             <img src={src} width="100%" />
//             <h4>{ props.shoes[i].title }</h4>
//             <p>{ props.shoes[i].content} & {props.shoes[i].price }</p>
//           </Col>
//         );
//       })
//     )
//   }

  export default ShoesItem;
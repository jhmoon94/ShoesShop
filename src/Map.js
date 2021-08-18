import {Navbar, Container, Nav, NavDropdown , Row, Col} from 'react-bootstrap';
import ShoesItem from './ShoesItem.js';
function Map(props) {
    return (
        <Row>
            { 
                props.shoes.map((x, i)=>{
                    return(
                    <ShoesItem shoes = { props.shoes[i] } i = { i } key = { i }> </ ShoesItem>
                    )
                })
            } 
            {/* shoesItem 컴포넌트에서 map을 사용하여 컴포넌트 태그를 하나만 사용하는 방법도 있다 */}
        </Row>
    )
}

export default Map;
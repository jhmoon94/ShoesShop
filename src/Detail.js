import {Navbar, Container, Nav, NavDropdown , Row, Col} from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components' 
import './Detail.scss'

function Detail (props) {
    let history = useHistory();//방문기록 오브젝트를 반환하는 함수
    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id == id
      });
    let Style1 = styled.div`
      color : red;
    `
    let Style1_1 = styled.h6`
      color : blue;
      backgroundColor:  ${ props => props.배경색상 }
    `
    return (
        <>
            <Style1>
                styled-coponent div
                <Style1_1>
                    embeded styled-coponent h6
                </Style1_1>
            </Style1>
            <div className="my-alert">
                <p>재고가 얼마 남지 않았습니다</p>
            </div>
            <Container>
            <Row>
            <Col md={ 6 }>
            <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id) + 1}.jpg`} width="100%" />
            </Col>
            <Col md={ 6 } mt={ 4 }>
                <h4 className="pt-5">{찾은상품.title}</h4>
                <p>{찾은상품.content}</p>
                <p>{찾은상품.price}원</p>
                <button className="btn btn-danger">Order</button> 
                <span> </span>
                <button className="btn btn-danger" onClick={()=>{history.goBack()}}>Go Back</button> 
            </Col>
            </Row>
            </Container>
        </>
    )
}

export default Detail;
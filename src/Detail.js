import { useState, useEffect } from 'react'
import { Navbar, Container, Nav, NavDropdown , Row, Col } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components' 
import './Detail.scss'

let Style1 = styled.div`
color : red;
`
let Style1_1 = styled.div`
color : black;
font-size : 50px;
background-color:  ${ props => props.배경색상 }
`


function Detail (props) {

    let [myAlert, setMyAlert] = useState(true)
    let [myAlert2, setMyAlert2] = useState(null)
    let [input, setInput] = useState(null)


    useEffect(()=>{
        const timer = setTimeout(()=>{
            setMyAlert2(true);
        }, 2000) 
        //clearTimeout을 사용해야하기 때문에 항상 변수에 할당해야만 한다
        //함수할당하는 다른 방법으로 둘로 합칠 수 있다 
        // const timer = function() { setTimeout(()=>{
        //     setMyAlert2(true);
        // }, 2000) }
        // timer();
        return () => {setMyAlert(false); clearTimeout(timer)} //두번째 인수가 있는 경우
    },[myAlert2])

    let history = useHistory();//방문기록 오브젝트를 반환하는 함수
    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function(상품){
        return 상품.id == id
      });

    return (
        <>
            <Style1> 
                <Style1_1 배경색상={'white'}>
                    Detail
                </Style1_1>
            </Style1>
            {
                myAlert
                ?
                <div className="my-alert2">
                    <p>재고가 얼마 남지 않았습니다</p>
                </div>
                :
                false

            }
            {
                myAlert2
                ?
                <div className="my-alert3">
                    <p>서두르십시오</p>
                </div>
                :
                false

            }
            <input onChange={ (e)=>{setInput(e.currentTarget.value);}} />
            { input }
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
                <button className="btn btn-danger" onClick={()=>{history.goBack();}}>Go Back</button> 
            </Col>
            </Row>
            </Container>
        </>
    )
}

export default Detail;
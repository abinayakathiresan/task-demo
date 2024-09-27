import React from "react";
import { Button, Col, Container, NavLink, Row } from "react-bootstrap";
import "./HeaderTop.scss"; 
import banner from "../../../assets/banner.jpg";

const HeaderTop = ()=> {
    const headerTopLinks = [{icon:"bi bi-facebook", url:"#"},{icon:"bi bi-twitter", url:"#"},{icon:"bi bi-linkedin", url:"#"}, {icon:"bi bi-pinterest",url:"#"}];

    return(
        <div  className = "header__wrapper">
       <Container>
        <Row className="align-items-center">
            <Col lg= "8" md="12" className="d-none d-md-block">
                <Row className="align-items-center">
                    <Col className="d-flex gap-2 align-items-center" sm="auto">
                        <div className="bi bi-envelope-fill"></div>
                        <h2>hello@colorlib.com</h2>
                    </Col>
                    <Col sm="auto">Free Shipping for all Order of $99</Col>
                </Row>
            </Col>
            <Col>
                <Row className="align-items-center">
                    <Col className="d-flex gap-3">{headerTopLinks?.map((item)=> {return <NavLink to = {item.url}><div className={item.icon}/></NavLink>})}
                    </Col>
                    <Col className="d-flex gap-2 align-items-center" sm="auto">
                <div className="bi bi-envelope-fill"></div>
                <h2>English</h2>
                </Col>
                <Col className="d-flex gap-2" sm="auto">
                <div className="bi bi-person-fill"></div>
                <div>Login</div>
                <Button variant="info">Infff</Button>
                </Col>
                </Row>
            </Col>
            
            
        </Row>
        
       </Container>
       </div> 
    )
}
export default HeaderTop;
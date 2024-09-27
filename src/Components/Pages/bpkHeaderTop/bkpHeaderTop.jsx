import React, { useState } from "react";
import { Button, Col, Container, Row} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./HeaderTop.css";
import { CoPresent } from "@mui/icons-material";

const HeaderTop = ()=> {
    const[displayMenu, setDisplayMenu] = useState(false);

    const headerTopLinks = [{icon:"bi bi-facebook", url:"#"},{icon:"bi bi-twitter", url:"#"},{icon:"bi bi-linkedin", url:"#"}, {icon:"bi bi-pinterest",url:"#"}];

    const dropdownClass = "dropdownPosition" + (displayMenu ? "header-top__dropdown-display" : "header-top__dropdown-hide");
    const dropdownClass1 = `dropdownPosition ${displayMenu ? "header-top__dropdown-display" : "header-top__dropdown-hide"} c1`;

    const handleClick = () => {
        setDisplayMenu(!displayMenu);
    }
    return(
        <Container>
            <Row>
                <Col md="12" lg="8" className = "d-none d-md-block">
                    <Row>
                        <Col sm="auto">
                            <div className = "d-flex gap-2">
                                <div className="bi bi-envelope-fill"></div>
                                <div className = "border-end pe-2"> hello@colorlib.com</div>
                            </div>
                        </Col>
                        <Col sm="auto">
                            <div>Free Shipping for all Order of $99</div>
                        </Col>
                    </Row>    
                </Col>
                    
                <Col md="12" lg= "4">
                    <Row>
                        <Col>
                            <div className = "d-flex  gap-4">
                                {headerTopLinks?.map((item)=> { return <NavLink to = {item.url}><div className = {item.icon}></div></NavLink>})}
                            </div>
                        </Col>
                        <Col sm = "auto">
                            <div className = "d-flex  gap-2">
                                <div className="bi bi-envelope-fill"></div>
                                <div> English</div>
                            </div>
                            
                        </Col>
                        <Col sm = "auto" className = "d-block d-sm-none">
                            <div className = "d-flex  gap-2" >
                                <div className="bi bi-person-fill"></div>
                                <div>Login</div>
                            </div>
                            
                        </Col>
                    </Row>
                   
                </Col>
            </Row>
            <Row>
                <Col className = "header-top__dropdown" sm = "auto" onClick = {handleClick}>
                <i class="bi bi-list"></i>
                All Departments
                <i class="bi bi-caret-down"></i>
                </Col>
            </Row>
            <div class ={`dropdownPosition ${dropdownClass}`}>
                <ul>
                    <li>vegtables</li>
                    <li>vegtables</li>
                    <li>vegtables</li>
                    <li>vegtables</li>
                    <li>vegtables</li>
                </ul>
            </div>
            <div>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ...
            </div>
        </Container>
    )
}
export default HeaderTop;
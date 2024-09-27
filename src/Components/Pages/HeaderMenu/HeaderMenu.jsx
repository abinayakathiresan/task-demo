import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./HeaderMenu.css";
const HeaderMenu = () =>
{
    const[display, setDisplay] = useState(false);
    const dropdownItem = [{label:"fresh meat", url:"#"},{label:"fresh meat", url:"#"},{label:"fresh meat", url:"#"}];

    const handleDropdown = ()=>{
        setDisplay(!display);
    }
  
    return(
        <Container>
        <Row>
            <Col className = "dropdown__parent">
                <div onClick={handleDropdown}>
                    <div class="bi bi-list"></div>
                    All departments
                    <div class="bi bi-caret-down"></div>
                </div>
                <div className = {`${display ? "dropdown__display" : "dropdown__default" } displayPosition`}>
                    {dropdownItem?.map((item)=> { return <NavLink to = {item.url}><div>{item.label}</div></NavLink>})}
                </div>
                
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
        </Row></Container>
    )
}
export default HeaderMenu;
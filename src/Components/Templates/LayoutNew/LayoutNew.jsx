import React from "react";
import HeaderTop from "../../Pages/HeaderTop/HeaderTop";
import ProductSection from "../../Pages/ProductSection/ProductSection";
import banner from "../../../assets/banner.jpg";
import { Col, Container, Row } from "react-bootstrap";
import VerticalSection from "../../Pages/VerticalSection/VerticalSection";
import HeaderMenu from "../../Pages/HeaderMenu/HeaderMenu";
const LayoutNew = ()=> {
   
    const card= [{img:banner,label:"Crab Pool Security",amt:1},{img:banner,label:"Crab Pool Security",amt:1},{img:banner,label:"Crab Pool Security",amt:1}]

    

    return(
        <div>
            <HeaderTop/>
            <HeaderMenu/>
            <ProductSection title = "Featured Products" card = {card}/>
            <Container>
            <Row>
                <Col><VerticalSection title = "Lastest Products" card = {card}/></Col>
                <Col><VerticalSection title = "Top Rated Products" card = {card}/></Col>
                <Col><VerticalSection title = "Reviewed Products" card = {card}/></Col>
            </Row>
            </Container>
            
           

        </div>
    )
}
export default LayoutNew;
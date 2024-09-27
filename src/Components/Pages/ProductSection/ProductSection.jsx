import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "../ProductItem/ProductItem";


const ProductSection = (props)=> {
    

    return(
        <Container>
            <Row>
                <Col>{props.title}</Col>
            </Row>
            <Row>
                
                    {props.card?.map((item)=>
                        {return <Col sm ="12" md="4" lg="3"><ProductItem img={item.img} label = {item.label} amt = {item.amt}>123</ProductItem></Col>})}
                
            </Row>
        </Container>
    )
}
export default ProductSection;
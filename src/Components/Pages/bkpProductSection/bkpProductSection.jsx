import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductItem from "../ProductItem/ProductItem";

const ProductSection = ({title = "featured product",card})=> {

    return(
        <Container>
            <Row>
                <Col>{title}
                </Col>
            </Row>
            <Row>
                {card?.map((item)=> {
                     return <Col>
                     <ProductItem img = {item.img} title={item.title} amt = {item.amt}/>
                     </Col>;
                        
                        })}
             </Row>
    </Container>
    )
}
export default ProductSection;
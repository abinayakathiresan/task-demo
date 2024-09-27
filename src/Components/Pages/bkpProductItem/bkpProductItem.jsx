import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ProductItem.css";

const ProductItem = (props)=> {
  
    return(
        <div>
            <img src = {props.img} className = "productItem__img"/>
            {props.title}
            {props.amt}

                
            </div>
    )
}
export default ProductItem;
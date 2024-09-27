import React from "react";
import "./ProductItem.css";
import { Col, Row } from "react-bootstrap";

const ProductItem = (props)=> {
    

    return(
        
            <div>
                <div class = "product-item__img-parent"><img src = {props.img} alt = "product"  className = "productItem__img"/></div>
                <div>{props.label}</div>
                <div>{props.amt}</div>
                <div>{props.children}</div>
            </div>
    )
}
export default ProductItem;
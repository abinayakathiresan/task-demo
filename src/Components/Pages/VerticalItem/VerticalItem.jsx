import React from "react";
import "./VerticalItem.css";
import { Col, Row } from "react-bootstrap";

const VerticalItem  = (props)=> {
    

    return(
        
            <div class = "verticalItem__wrapper">
                <div class = "product-item__img-parent"><img src = {props.img} alt = "product"  className = "productItem__img"/></div>
                <div>
                    <div>{props.label}</div>
                    <div>{props.amt}</div>
                </div>
                
            </div>
    )
}
export default VerticalItem ;
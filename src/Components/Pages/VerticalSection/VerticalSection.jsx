import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VerticalItem from "../VerticalItem/VerticalItem";



const VerticalSection = (props)=> {
    

    return(
        <>
            <div>
                {props.title}
            </div>
            <div>
                
                    {props.card?.map((item)=>
                        {return <VerticalItem img={item.img} label = {item.label} amt = {item.amt}/>})}
                
            </div>
       </>
    )
}
export default VerticalSection;
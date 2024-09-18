import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch } from "react-redux";
import { addStudent } from "../../State/Slice/StudentSlice";
import { useNavigate } from "react-router-dom";

const FeesManagement = () => {

    const[name,setName] = useState();
    const[month, setMonth] = useState();
    const[amount, setAmount] = useState(); 
    
    const dispatch = useDispatch();
    const nav = useNavigate();

    const handleSubmit = ()=> {
        const id = Math.random(9,999);
        const stuObj = {id:id, name:name, month:month, amount:amount};
        dispatch(addStudent(stuObj));
        nav("/fees-list");
       
    }
    return(
        <Container>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>Name</Form.Label>
                    <Col sm={10}>
                    <Form.Control type="text" placeholder="Enter your name" onChange= {(e)=> setName(e.currentTarget.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                    Month
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="month" onChange= {(e)=> setMonth(e.currentTarget.value)}/>
                    </Col>
                </Form.Group>
      
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>
                    Amount
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="number" placeholder="Enter Amount" onChange= {(e)=> setAmount(e.currentTarget.value)}/>
                    </Col>
                </Form.Group>
      
      
                <Form.Group as={Row} className="mb-3">
                    <Col xs = {2} >
                    <Button type="submit" onClick = {handleSubmit}>Add</Button>
                    </Col>
                    <Col xs = {2}>
                    <Button type="reset">Reset</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    )
}
export default FeesManagement;
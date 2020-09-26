import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const FlexContainer = (
  props
  ) => {
    return ( 
    <Container >
        <Row  className=".row" style={{margin: "50px 0"}} >
        <Col style={{textAlign: "center"}} >
       <img src={props.image} alt="hi"></img>
            </Col>
            <Col className="container-md">
            <h3 style={{textAlign:"left"}}>{props.cycle}<br/> </h3> 
       
         <p style={{padding: "0 2em"}}>
    {props.description}
  </p>

            </Col>   
          
        </Row>      
 
  </Container> );
}
 
export default FlexContainer;


import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




const HeroTwo = (
    props

) => {
    return (  
       
<Jumbotron>
    <Container className="heroContainer" >
        <Row className=" position-relative hero row text-center">  
            <Col >
            <h1 className="text-center" >{props.title}<br/></h1> 
        
       
         <p style={{padding: "0 2em"}}>
    {props.description}
  </p>

            </Col>

           
          
        </Row>
        
 
  </Container>

</Jumbotron>

    );
}
 
export default HeroTwo;
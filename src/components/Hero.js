import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




const Hero = (
    props

) => {
    return (  
       
<Jumbotron>
<div className="position-absolute text-center" style={{right: "5px", top: "10vh"}}>

    <div style={{border: "solid 2px green",width:"110px", height: "130px", margin: "1em"}}>
        <h4>Host</h4>
    <p>{props.host}</p>
    </div>
    <div style={{border: "solid 2px green",width:"110px", height: "130px", margin: "1em"}}>
    <h4>Life Span</h4>
    <p>{props.lifespan}</p>
</div>
<div style={{border: "solid 2px green",width:"110px", height: "130px", margin: "1em"}}>
<h4>Latin Name</h4>
    <p>{props.latinname}</p>
</div>
</div>
    <Container className="heroContainer" >
        <Row className=" position-relative hero row">
        <Col >
            <img width="100%" src={props.image} alt="hello" />

            
            </Col>
            <Col >
            <h1 style={{marginLeft: "50px"}}>{props.title}<br/></h1> 
        
        <div className="title-line" style={{borderTop: "solid 2px white", margin: "40px 10px"}}></div>
         <p style={{padding: "0 2em"}}>
    {props.description}
  </p>

            </Col>

           
          
        </Row>
        
 
  </Container>

</Jumbotron>

    );
}
 
export default Hero;
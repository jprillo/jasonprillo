import React from 'react';
import Button from './Button.js'




const HeroTwo = (
    props

) => {
    return (  
       

    <div className="heroContainer">
        <div className = "hero-row">
            <div className="heroImageDesktop">
       
            </div>
            <div className="heroText"> 
             
            <h1 >{props.title}</h1>        
            <p>{props.description}</p>
            <div className="button-wrap">
                <Button color={"#2ED0E1"} border={"5px 3px #86EE2A"} to={"/contact"} label={"CONTACT"}/>
                <Button color={"#86EE2A"} border={"5px 3px #2ED0E1"} to={"/blog"} label={"MY WORK"}/>
            </div>
         
            </div> 

        </div>
       
        
  </div>


    );
}
 
export default HeroTwo;
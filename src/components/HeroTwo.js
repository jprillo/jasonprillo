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
                <Button class={"button button-one"} to={"/contact"} label={"CONTACT"}/>
                <Button class={"button button-two"} to={"/blog"} label={"MY WORK"}/>
            </div>
         
            </div> 

        </div>
       
        
  </div>


    );
}
 
export default HeroTwo;
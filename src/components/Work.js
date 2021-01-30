import React from 'react';
import {Link} from 'gatsby';
import Button from './Button'
import Flamingo from '../../static/img/ff.png'



const Work = (
   

) => {
    return (        
<div className="work">
     <h2>My Work</h2>  
    <div className="row">
        <div className="work-post">
            <div className="work-image">
            <img src={Flamingo} alt="formal flamingo screen shot"/>
            </div>
            <div className="work-link">
               <Link to="https://formalflamingo.com" alt="formalflamingo.com">formalflamingo.com</Link>
           
            </div>
        </div>
        <div className="work-post">
            <div className="work-image">
            <img src={Flamingo} alt="formal flamingo screen shot"/>
            </div>
            <div className="work-link">
               <Link to="https://formalflamingo.com" alt="formalflamingo.com">formalflamingo.com</Link>
           
            </div>
        </div>
        <div className="work-post">
            <div className="work-image">
            <img src={Flamingo} alt="formal flamingo screen shot"/>
            <div className="work-info"><p>on the flip</p></div>
            </div>
            <div className="work-link">
               <Link to="https://formalflamingo.com" alt="formalflamingo.com">formalflamingo.com</Link>
           
            </div>
        </div>
      
    </div>

  
<div>
<Button class={"button button-one"} to={"/contact"} label={"See More"}/>
</div>
                       
</div>
   
    );
}
 
export default Work;
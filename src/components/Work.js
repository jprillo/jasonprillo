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
            </div>
            <div className="work-link">
               <Link to="https://formalflamingo.com" alt="formalflamingo.com">formalflamingo.com</Link>
           
            </div>
        </div>
      
    </div>

  
<div>
<Button color={"#2ED0E1"} border={"5px 3px #86EE2A"} to={"/contact"} label={"See More"}/>
</div>
                       
</div>
   
    );
}
 
export default Work;
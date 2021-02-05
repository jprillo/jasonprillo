import React from 'react';

import Button from './Button'

import HomeProjects from './HomeProjects'



const Work = (
   

) => {
    return (        
<div className="work">
     <h2>My Work</h2>  
    <div className="row">
 


  <HomeProjects/>
  </div>
<div>
<Button class={"button button-one"} to={"/contact"} label={"See More"}/>
</div>
                       
</div>
   
    );
}
 
export default Work;
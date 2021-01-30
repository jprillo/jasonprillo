import React from 'react';
import {Link} from "gatsby"


const Button = (
    props

) => {
    return (        
<Link 
    
    to={props.to} 
    className= {props.class}>
        {props.label}
                       
</Link>
   
    );
}
 
export default Button;
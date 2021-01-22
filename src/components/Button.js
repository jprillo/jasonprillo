import React from 'react';
import {Link} from "gatsby"


const Button = (
    props

) => {
    return (        
<Link 
    style={{borderColor: props.color, boxShadow: props.border}}
    to={props.to} 
    className="button">
        {props.label}
                       
</Link>
   
    );
}
 
export default Button;
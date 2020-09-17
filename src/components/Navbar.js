
  import React, { useState } from "react"; 
  
  const NavBar = () => {   
    
    const [isActive, toggleNavbar] = useState(false);
    const setActive =()=>{toggleNavbar(true);}
      return(
          <div className={` navagation-wrap col-12 ${isActive ? 'mobile-wrap' : ''}`}> 
                <div id="main-nav-wrap">
                  <div className="logo-wrap">
                      <a href="/">
                    <span className="formal" >Formal</span><span className="primary-color">Flamingo</span> </a>
  
                  </div>
                  
                  <div >
                      <div  className={` responsive-nav ${isActive ? 'mobile-nav' : ''}`}>
                          <ul className="nav">
                            
                                     <li><a className="hack"  href="/">Home</a></li>
                              <li><a href="/about"  className="hack">About</a></li>
                              <li><a href="/blog"  className="hack">Blog</a></li>
                               <li><a href="/products"  className="hack">Products</a></li>
                              <li><a href="/contact"  className="hack">Contact</a></li>           
                            
  
                            
                          </ul>
                      </div>
                   
                  </div>
         
      
      
                  <div id="hamburger-wrap">
                      <div  className={` burger-open ${isActive ? 'burger-close' : ''}`}
              
              data-target='nav-menu'
              onClick={setActive}
              aria-hidden={true}>
                          <span className="line line01"></span>
                          <span className="line line02"></span>
                          <span className="line line03"></span>
                      </div>
                  </div>
                 
              </div>
          </div>
  
      );
  };

  export default NavBar;
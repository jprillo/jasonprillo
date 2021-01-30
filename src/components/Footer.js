import React from 'react'
import { Link } from 'gatsby'


import facebook from '../../static/img/facebook.png'

import twitter from '../../static/img/twitter.png'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">            
                <section >
                  <ul className="footer-nav" >
                    <li>
                      <Link to="/" >
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link  to="/about">
                        ABOUT
                      </Link>
                    </li>
                    <li>
                      <Link  to="/projects">
                        PROJECTS
                      </Link>
                    </li>
                    <li>
                      <Link  to="/projects">
                        CONTACT
                      </Link>
                    </li>
                 
                  
                  </ul>
                </section>
          
           
              <div className="social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                  
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                  
                    src={twitter}
                    alt="Twitter"
                   
                  />
                </a>
        
              </div>
    
      </footer>
    )
  }
}

export default Footer

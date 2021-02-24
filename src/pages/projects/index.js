import React from 'react'

import Layout from '../../components/Layout'
import ProjectRoll from '../../components/ProjectRoll'


export default class BlogIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ready: false }; // This one.
  }
  componentDidMount() {
    this.setState({ ready: true }); // This one.
  }
  render() {
    return (
      <Layout >
        <div style={{ overflowX: "hidden", visibility: this.state.ready ? 'visible' : 'none' }} className="blue-background" >
        <div className="title" >
     <h1 >Projects</h1>
     </div> 
     <div className="row">
       <div>
         <ProjectRoll />

         </div>
       
     </div>
        
      
        </div>
     
         
      </Layout>
    )
  }
}

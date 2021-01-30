import React from 'react'

import Layout from '../../components/Layout'
import ProjectRoll from '../../components/ProjectRoll'


export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="blue-background" >
        <div className="title" >
     <h1 >Projects</h1>
     </div> 
          <ProjectRoll />
      
        </div>
     
         
      </Layout>
    )
  }
}

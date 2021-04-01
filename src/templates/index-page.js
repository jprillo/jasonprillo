import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'


import HeroTwo from '../components/HeroTwo'
import Work from '../components/Work'



export const IndexPageTemplate = ({
  image,
  title,
  
  subheading,

}) => (
  <div>
      <HeroTwo description={subheading}  image={image.childImageSharp.fluid.src} alt="hi" title={title}></HeroTwo>
      <Work/>
  
     
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  
  subheading: PropTypes.string,

}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
     
        subheading={frontmatter.subheading}
      
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        
        subheading
     
        
      
      }
    }
  }
`

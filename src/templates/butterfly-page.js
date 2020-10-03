import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FlexContainer from '../components/FlexContainer'




export const ButterflyPageTemplate = ({
  image,
  title,
  heading,
  description,  
  range,
  main,  
  host,
  lifespan,
  latinname,
  helmet
}) => (
  <div >
      {helmet || ''}
    <Hero description={description} latinname={latinname} lifespan={lifespan} image={image.childImageSharp.fluid.src} host={host} alt="hi" title={title}></Hero>
<div className="life" style={{background: "#361D2F"}}>
<h2>Life Cycle</h2>

<FlexContainer description={main.description1} cycle="Host Plant" image={main.image1.image.childImageSharp.fluid.src } alt="mo"></FlexContainer>
<FlexContainer description={main.description2} cycle="Egg" image={main.image2.image.childImageSharp.fluid.src } alt="mo"></FlexContainer>
<FlexContainer description={main.description3} cycle="Caterpiller" image={main.image3.image.childImageSharp.fluid.src } alt="mo"></FlexContainer>
<FlexContainer description={main.description4} cycle="Butterfly" image={main.image4.image.childImageSharp.fluid.src } alt="mo" ></FlexContainer>

</div>
<div style={{background: "#200630", color: "white"}}>
<h2>Range</h2>
<FlexContainer description={range.description} cycle="Range" image={range.image.image.childImageSharp.fluid.src } alt="mo" ></FlexContainer>
</div>


  </div>
)

ButterflyPageTemplate.propTypes = {
  helmet: PropTypes.object,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  host: PropTypes.string,
  lifespan: PropTypes.string,
  latinname: PropTypes.string,
  range: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description1: PropTypes.string,
    description2: PropTypes.string,
    description3: PropTypes.string,
    description4: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    
  }),
 
}

const ButterflyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ButterflyPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        main={frontmatter.main}
        range={frontmatter.range}        
        host={frontmatter.host}
        lifespan={frontmatter.lifespan}
        latinname={frontmatter.latinname}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

ButterflyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ButterflyPage

export const ButterflyPageQuery = graphql`
  query ButterflyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        host
        lifespan
        latinname        
        range {
          description
          image {
              alt
              image {
                childImageSharp {
                  fluid(maxWidth: 526, quality: 92) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        main {
          heading
          description1
          description2
          description3
          description4
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image4 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        
      }
    }
  }
`

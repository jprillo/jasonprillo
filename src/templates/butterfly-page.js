import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FlexContainer from '../components/FlexContainer'




export const ButterflyPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  range,
  main,
  testimonials,
  fullImage,
  pricing,
  host,
  lifespan,
  latinname,
}) => (
  <div >
    <Hero latinname={latinname} lifespan={lifespan} image={image.childImageSharp.fluid.src} host={host} alt="hi" title={title}></Hero>
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
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  host: PropTypes.string,
  lifespan: PropTypes.string,
  latinname: PropTypes.string,

  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
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
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
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
        intro={frontmatter.intro}
        main={frontmatter.main}
        range={frontmatter.range}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
        host={frontmatter.host}
        lifespan={frontmatter.lifespan}
        latinname={frontmatter.latinname}
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
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
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
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`

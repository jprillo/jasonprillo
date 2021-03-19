import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'


export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="blue-background">   
      <div > 
     <div className="title" >
     <h1 >About Me</h1>
     </div> 
     <div className="content-container">
     <PageContent className="content" content={content} /> 
     <ul className="about-list">
       <li>
       I am a web developer from Palm Bay, Florida. 
       </li>
       <li>
       I specialize in making Jamstack web applications with Gatsby and React.
       </li>
       <li>Right now, I am learning the backend so I can build full-stack MERN applications.</li>
     <li>I was a middle school special education teacher for 10 years.</li>
     <li>My web development business is named Formal Flamingo.</li>
     <li>I also make graphic-designed logos, portraits, animations, and pictures of my father-in-law.</li>
    <li>I sell art. Want Some?</li>
    <li>I sell Christmas Earrings. Want Some? </li>
    <li>I raise and release moths and butterflies I find in my garden. Check it out.</li>
    <li>I do not eat onions.</li>
    <li>50% of my liked songs on Spotify are by Young Dolph. </li>
    <li>I have 6 cats. Siruis Black, Hufflepuffy, Snape, Luna, Bellatrix, and Baby. </li>
    <li>I like Harry Potter. </li>
    <li>I love Tom Brady. </li>
     </ul>
     </div>
          
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

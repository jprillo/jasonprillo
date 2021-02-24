import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

import Content, { HTMLContent } from '../components/Content'

export const ProjectPostTemplate = ({
  content,
  contentComponent,
  description,
  featuredimage,
  tags,
  title,
  helmet,
  design,
  code,
  projectlink,
  github,
  slug
}) => {
  const ProjectContent = contentComponent || Content

  return (
    <section className="section blue-background">
      {helmet || ''}
    
      <div className="project" >
      
            <h1>
              {title}
            </h1>
            <div className="row linear-background" style={{padding: "8px"}}>
                <div  className="project-image"  >
                 <PreviewCompatibleImage 
                        imageInfo={{
                          image: featuredimage.childImageSharp.fluid.src,
                          alt: `featured image thumbnail for post ${title}`,
                          
                         
                        }}
                      />
                 
                </div>
                <div style={{position: "relative"}} className="project-box" >
                    <p><span className="work-title">{title}</span> {description}</p>

                    <div >
                      <h3 className="secondary-color">Tools</h3>
                      <div style={{display: "flex", justifyContent: "center"}}>
                      <div style={{margin: " 0 2em"}}>
                        <h4 className="primary1-color">Design</h4>
                        {code && code.length ? (
              <div>
     
                <ul>
                  {code.map((c) => (
                    <li >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
                        </div>
                        <div style={{margin: " 0 2em"}}>
                        <h4 className="primary2-color">Code</h4>
                        {design && design.length ? (
              <div>
         
                <ul>
                  {design.map((d) => (
                    <li >
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
                        </div>


                      </div>
                 
                         

                    </div>
                
                    <div className="work-links">
               <Link to={projectlink} alt="formalflamingo.com">Project Home</Link>
                <Link to={github} alt="formalflamingo.com">Github Repo</Link>
                <Link to={slug} alt="formalflamingo.com">More Info</Link> 
               </div>


       
                </div>
          
            </div>
            <div style={{whiteSpace: "pre-line"}} className="content-container">
            <ProjectContent content={content} />
            <Link className="projects-link" to ="/projects" alt="projects">View all Projects</Link>
            </div>
          
          
     
      </div>
    </section>
  )
}

ProjectPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  projectlink: PropTypes.string,
  github: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  code: PropTypes.array,
  design: PropTypes.array,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const ProjectPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProjectPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        code={post.frontmatter.code}    
        design={post.frontmatter.design}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
        projectlink={post.frontmatter.projectlink}
        github={post.frontmatter.github}
        slug={post.fields.slug}
      />
    </Layout>
  )
}

ProjectPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProjectPost

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        projectlink
        github        
        featuredimage {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        tags
        design
        code
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'


class ProjectRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="blog-roll">
        
        {posts &&
          posts.map(({ node: post }) => (
            <div  className="work-post "  key={post.id}>
               

        
            <div className="work-image">
              <div className="work-image-container">
                  
              <div className="work-info">
                <p>{post.frontmatter.description} </p>
                <div>
               <Link to={post.frontmatter.projectlink} alt="formalflamingo.com">FF</Link>
                <Link to={post.frontmatter.github} alt="formalflamingo.com">Github</Link>
                <Link to={post.fields.slug} alt="formalflamingo.com">More Info</Link> 
               </div>
               </div>
              <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                      

              </div>

            </div>
      
        
        
              <div className="work-link" style={{textAlign: "center"}}>
               <Link to="https://formalflamingo.com" alt="formalflamingo.com">{post.frontmatter.title}</Link>
           
            </div>
            </div>
          ))}
      </div>
    )
  }
}

ProjectRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project-page" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                description
                projectlink
                github
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProjectRoll data={data} count={count} />}
  />
)

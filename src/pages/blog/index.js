import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import HeroTwo from '../../components/HeroTwo'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
         
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
      <HeroTwo title="Blog" description="All things Florida Gardening"/>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

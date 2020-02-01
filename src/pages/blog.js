import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { Banner } from '../elements/Banners'
import { ReadMoreBtn } from '../elements/Buttons'
import { innerPadding, defaultPadding } from '../utilities/Padding'

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <Banner>
        <h1>Blog</h1>
      </Banner>
      <section
        css={`
          padding: 0 ${innerPadding} ${defaultPadding};
        `}
      >
        <ul css="list-style: none;">
          {edges.map(
            ({
              node: {
                excerpt,
                frontmatter: { title },
                fields: { slug },
              },
            }) => (
              <li>
                <h2>{title}</h2>
                <p>{excerpt}</p>

                <ReadMoreBtn to={`posts${slug}`}>Read More</ReadMoreBtn>
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetPosts {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Blog

import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

const BlogArchive = () => {
  return (
    <StaticQuery
      query={BLOG_ARCHIVE_QUERY}
      render={({ allMarkdownRemark: { edges } }) =>
        edges.map(({ node: { frontmatter: { title, path } } }) => (
          <p>
            <Link to={`/posts/${path}`}>{title}</Link>
          </p>
        ))
      }
    />
  )
}

const BLOG_ARCHIVE_QUERY = graphql`
  query blogTitleQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Article" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
export default BlogArchive

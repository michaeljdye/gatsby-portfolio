import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

const Listings = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark: { edges } }) =>
      edges.map(({ node }) => (
        <div key={node.frontmatter.path}>
          <Link to={`/posts/${node.frontmatter.path}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link className="read-more" to={`/posts/${node.frontmatter.path}`}>
            Read More
          </Link>
        </div>
      ))
    }
  />
)

const LISTING_QUERY = graphql`
  query BlogListingQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Article" } } }
      limit: 10
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            source
            demo
            img
            path
            date(formatString: "MMMM, DD, YYYY")
            category
          }
        }
      }
    }
  }
`

export default Listings

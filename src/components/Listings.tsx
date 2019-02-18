import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import { lighten } from 'polished'
import { colorPrimary, colorSecondary } from '../utilities'

const Listings = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark: { edges }, allImageSharp }) =>
      edges.map(({ node }) => (
        <PostContainer key={node.frontmatter.path}>
          <p>{node.frontmatter.date}</p>
          <Link to={`/posts/${node.frontmatter.path}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          {allImageSharp.edges.map(edge =>
            edge.node.fluid.originalName === node.frontmatter.img ? (
              <img src={edge.node.fluid.src} />
            ) : (
              ''
            )
          )}
          <p>{node.excerpt}</p>
          <ReadMoreBtn
            className="read-more"
            to={`/posts/${node.frontmatter.path}`}
          >
            Read More
          </ReadMoreBtn>
        </PostContainer>
      ))
    }
  />
)

const PostContainer = styled.div`
  margin: 2.5rem 0;

  a {
    text-decoration: none;
  }

  h2 {
    color: #111;
  }

  p:first-child {
    font-weight: 700;
    color: ${colorSecondary};
  }

  p {
    font-size: 1.125rem;
  }
`

const ReadMoreBtn = styled(Link)`
  font-size: 0.875rem;
  padding: 7px 15px;
  background: ${colorPrimary};
  font-weight: 700;
  text-transform: uppercase;
  color: #111;
  text-decoration: none !important;
  transition: all 0.2s linear;

  &:hover {
    background: ${lighten(0.2, colorPrimary)};
  }
`

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
    allImageSharp {
      edges {
        node {
          fluid {
            src
            originalName
          }
        }
      }
    }
  }
`

export default Listings

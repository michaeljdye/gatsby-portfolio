import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import { lighten } from 'polished'
import { colorPrimary, colorSecondary, defaultPadding } from '../utilities'
import { ReadMoreBtn } from '../elements'

const Listings = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark: { edges }, allImageSharp }) =>
      edges.map(({ node }) => (
        <PostContainer key={node.frontmatter.path}>
          <Link to={`/posts/${node.frontmatter.path}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
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
  width: 60vw;
  margin: 2.5rem 0;
  background: #fff;
  padding: ${defaultPadding};

  a {
    text-decoration: none;
  }

  h2 {
    font-size: 2.5rem;
    color: #111;
  }

  img {
    width: 100%;
  }

  p {
    font-size: 1.125rem;
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

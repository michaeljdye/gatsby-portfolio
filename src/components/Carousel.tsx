import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import { lighten } from 'polished'
import { colorPrimary, colorSecondary } from '../utilities'

const Carousel = () => (
  <StaticQuery
    query={CAROUSEL_QUERY}
    render={({ allMarkdownRemark: { edges }, allImageSharp }) =>
      edges.map(({ node }, i) => (
        <PostContainer key={i}>
          <PostWrapper>
            <Link
              className="post__title"
              to={`/posts/${node.frontmatter.path}`}
            >
              <h3>{node.frontmatter.title}</h3>
            </Link>
            {allImageSharp.edges.map((edge, i) =>
              edge.node.fluid.originalName === node.frontmatter.img ? (
                <img src={edge.node.fluid.src} key={i} />
              ) : (
                ''
              )
            )}
          </PostWrapper>

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

  .post__title {
    position: absolute;
    z-index: 100;
    color: #fff;
  }

  h2 {
    color: #111;
  }

  img {
    filter: grayscale(60%);
  }

  p:first-child {
    font-weight: 700;
    color: ${colorSecondary};
  }

  p {
    font-size: 1.125rem;
  }
`

const PostWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
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

const CAROUSEL_QUERY = graphql`
  query BlogCarouselQuery {
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

export default Carousel

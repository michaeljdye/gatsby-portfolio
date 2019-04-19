import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import { ProjectImg, ProjectWrapper, Btn } from '../elements'

const BlogCards = () => (
  <StaticQuery
    query={CAROUSEL_QUERY}
    render={({ allMarkdownRemark: { edges }, allImageSharp }) =>
      edges.map(({ node }, i) => (
        <ProjectWrapper key={i}>
          <Link
            className="post__title"
            to={`/posts/${node.frontmatter.path}`}
          />
          <ProjectImg
            img={allImageSharp.edges.map(edge =>
              edge.node.fluid.originalName === node.frontmatter.img
                ? edge.node.fluid.src
                : ''
            )}
          >
            <h3 style={{ fontSize: '26px' }}>{node.frontmatter.title}</h3>
          </ProjectImg>
          <Btn as={Link} to={`/posts/${node.frontmatter.path}`}>
            Read More
          </Btn>
        </ProjectWrapper>
      ))
    }
  />
)

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

export default BlogCards

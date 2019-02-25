import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ProjectWrapper, ProjectImg, Btn } from '../elements'

const Projects: React.SFC<{}> = () => (
  <StaticQuery
    query={PROJECT_CARD_QUERY}
    render={({ allMarkdownRemark, allImageSharp }) =>
      allMarkdownRemark.edges.map(({ node }, i) => (
        <ProjectWrapper color="white" key={i}>
          <ProjectImg
            img={allImageSharp.edges.map(edge =>
              edge.node.fluid.originalName === node.frontmatter.img
                ? edge.node.fluid.src
                : ''
            )}
          >
            <h3 color="white">{node.frontmatter.title}</h3>
          </ProjectImg>
          <p>{node.excerpt}</p>
          <Btn
            modifiers="small"
            mr="10px"
            href={node.frontmatter.source}
            target="_blank"
          >
            Source
          </Btn>
          <Btn modifiers="small" href={node.frontmatter.demo} target="_blank">
            Demo
          </Btn>
        </ProjectWrapper>
      ))
    }
  />
)

const PROJECT_CARD_QUERY = graphql`
  query ProjectInfoQuery {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Project" } } }
      limit: 6
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            source
            demo
            img
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
export default Projects

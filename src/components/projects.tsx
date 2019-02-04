import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { lighten } from 'polished'

const ProjectWrapper = styled.section`
  color: ${props => props.color};

  h3 {
    align-items: center;
    color: ${props => props.color};
  }
`

const ProjectImg: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: bottom center rgba(0, 0, 0, 0.5) url(${(props: any) => props.img});
  background-blend-mode: overlay;
  background-size: cover;
  width: 100%;
  height: 12.5rem;
  margin-bottom: 1.25rem;
  border-radius: 3px;
`
const ProjectBtn = styled.a`
  margin: 0 10px 0 0;
  padding: 3px 10px;
  background: ${props => props.theme.colorPrimary};
  font-weight: 600;
  color: #000;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    background: ${props => lighten(0.2, props.theme.colorPrimary)};
  }
`

const Projects: React.SFC = () => (
  <StaticQuery
    query={PROJECT_CARD_QUERY}
    render={({ allMarkdownRemark, allImageSharp }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <ProjectWrapper color="white">
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
          <ProjectBtn href={node.frontmatter.source} target="_blank">
            Source
          </ProjectBtn>
          <ProjectBtn href={node.frontmatter.demo} target="_blank">
            Demo
          </ProjectBtn>
        </ProjectWrapper>
      ))
    }
  />
)

const PROJECT_CARD_QUERY = graphql`
  query ProjectInfoQuery {
    allMarkdownRemark {
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

import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import GlobalStyle from '../global'
import Layout from '../components/Layout'
import { defaultPadding, colorFour, below } from '../utilities'
import Profile from '../images/profile.jpeg'
import BlogArchive from '../components/BlogArchive'

export default ({
  data,
  data: {
    markdownRemark: {
      frontmatter: { title, img },
    },
  },
}) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        {data.allImageSharp.edges
          .filter(edge => edge.node.fixed.originalName === img)
          .map(srcImg => (
            <BlogTitle bgImg={srcImg.node.fixed.src}>{title}</BlogTitle>
          ))}
      </div>
      <BlogWrap>
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <Aside>
          <h2>Recent Posts</h2>
          <BlogArchive />
        </Aside>
        <AuthorBox>
          <img height="100px" width="100px" src={Profile} alt="Joey Dye" />
          <AuthorContent>
            <h4>
              Authored by <Link to="/#about">Joey Dye</Link>
            </h4>
            <p>
              Web developer from Nashville, TN. Currently working as a front-end
              developer at Horton Group.
            </p>
          </AuthorContent>
        </AuthorBox>
      </BlogWrap>
      <GlobalStyle />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        img
      }
    }
    allImageSharp {
      edges {
        node {
          fixed(width: 1600) {
            src
            originalName
          }
        }
      }
    }
  }
`
const BlogTitle = styled.h1`
  padding: 80px 80px 80px 80px;
  margin-top: 0;
  font-size: 50px;
  text-align: center;
  text-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.5);
  background: center 30% rgba(0, 0, 0, 0.6) ${props => `url(${props.bgImg})`}
    no-repeat;
  background-blend-mode: overlay;
  background-size: fill;
  height: 35vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
`

const BlogWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px;
  grid-column-gap: 50px;
  width: 80vw;
  margin: 0 auto;
  padding: ${defaultPadding} 0;
`

const AuthorBox = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 1.56rem;
  grid-column: 1 / -1;
  align-items: center;
  background: #f7f7f7;
  margin-top: 5rem;
  padding: 1.25rem;

  ${below.phone`
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    padding: ${defaultPadding} 1.25rem;
  `}

  img {
    border-radius: 50%;
    margin-bottom: 0;
  }
`

const AuthorContent = styled.div`
  h4,
  a {
    font-size: 1.5rem;
  }

  h4 {
    margin-bottom: 0.625rem;

    a {
      color: ${colorFour};
    }
  }

  p {
    margin-bottom: 0;
  }
`

const Aside = styled.aside`
  background: #f7f7f7;
  padding: 20px;
  align-self: start;

  a {
    color: #111;
  }
`

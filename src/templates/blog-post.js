import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import GlobalStyle from '../global'
import Layout from '../components/Layout'
import { colorPrimary, defaultPadding, colorFour, below } from '../utilities'
import Profile from '../images/profile.jpeg'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <BlogTitle>{post.frontmatter.title}</BlogTitle>
      <BlogContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
      </BlogContent>
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
  background: rgba(0, 0, 0, 0.2)
    linear-gradient(
      to right bottom,
      #6efaf1,
      #4ad0e5,
      #4ba5cc,
      #557ba6,
      #545479
    );
  background-blend-mode: overlay;
  color: #fff;
  display: flex;
  align-items: center;
  border-bottom: 5px solid ${colorPrimary};
  justify-content: center;
  margin-bottom: 0;
`

const BlogContent = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: ${defaultPadding} 0;
`

const AuthorBox = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 1.56rem;
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

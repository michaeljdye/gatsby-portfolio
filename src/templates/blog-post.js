import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import GlobalStyle from '../global'
import Layout from '../components/Layout'
import { colorPrimary, colorSecondary } from '../utilities'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <BlogTitle>{post.frontmatter.title}</BlogTitle>
        <BlogContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
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
  font-size: 50px;
  text-align: center;
  background: ${colorSecondary};
  color: #fff;
  display: flex;
  align-items: center;
  border-bottom: 5px solid ${colorPrimary};
  justify-content: center;
  margin-bottom: 0;
`

const BlogContent = styled.div`
  padding: 80px 200px;
`

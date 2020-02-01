import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { innerPadding, defaultPadding } from '../utilities/Padding'
import { Banner } from '../elements/Banners'

const BlogPost = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title },
    },
  },
}) => {
  return (
    <Layout>
      <Banner>
        <h1>{title}</h1>
      </Banner>
      <div
        css={`
          padding: 0 ${innerPadding} ${defaultPadding};
        `}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`

export default BlogPost

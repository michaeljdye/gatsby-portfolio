import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { innerPadding, defaultPadding } from '../utilities/Padding'
import { Banner } from '../elements/Banners'
import { colorPrimary, colorFour } from '../utilities/Colors'

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
        <h1
          css={`
            color: ${colorFour};
          `}
        >
          {title}
        </h1>
      </Banner>
      <div
        css={`
          max-width: 800px;
          width: 88%;
          margin: 0 auto;

          h2 {
            position: relative;
            width: fit-content;

            &:after {
              content: '';
              display: block;
              position: absolute;
              left: 0;
              background: #00d8c9;
              width: 40%;
              height: 5px;
              margin-top: 10px;
            }
          }

          a {
            color: ${colorFour};
            text-decoration: none;
          }
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

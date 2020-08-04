import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Banner } from '../elements/Banners'
import { colorSecondary, colorFour } from '../utilities/Colors'
import { paddingLg, paddingSm, paddingMd } from '../utilities/padding'
import aboutImg from '../images/joey-dye-sf.jpg'

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
      <main
        css={`
          max-width: 700px;
          width: 88%;
          margin: 0 auto;
          font-size: 1.125rem;
        `}
      >
        <Banner>
          <h1
            css={`
              color: ${colorSecondary};
              margin-bottom: 0;
              text-transform: capitalize;
            `}
          >
            {title}
          </h1>
        </Banner>
        <div
          css={`
            h2 {
              position: relative;
              width: fit-content;
            }

            a {
              color: ${colorFour};
              text-decoration: none;
            }
          `}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div
          css={`
            display: flex;
            align-items: center;
            border-top: 1px solid #bbb;
            padding: ${paddingMd} 0 ${paddingLg} 0;
          `}
        >
          <img
            src={aboutImg}
            css={`
              width: 100px;
              height: 100px;
              border-radius: 50%;
              margin: 0 20px 0 0;
            `}
          />
          <div>
            <h3
              css={`
                padding-top: ${paddingSm};
                margin-bottom: 10px;
              `}
            >
              Joey Dye
            </h3>
            <p>Joey Dye is a Frontend Developer at Campaign Monitor.</p>
          </div>
        </div>
      </main>
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

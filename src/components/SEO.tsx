import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

interface Props {
  title?: string
  description?: string
}

const SEO: React.FunctionComponent<Props> = ({ title, description }) => (
  <StaticQuery
    query={query}
    render={data => {
      const seo = {
        title: title || data.site.siteMetadata.defaultTitle,
        description: description || data.site.siteMetadata.defaultDescription,
      }

      return (
        <>
          <Helmet
            title={seo.title}
            titleTemplate={data.site.siteMetadata.titleTemplate}
            link={[
              {
                rel: 'shortcut icon',
                type: 'image/png',
                href: `${data.file.childImageSharp.fluid}`,
              },
            ]}
          >
            <meta name="description" content={seo.description} />
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
    file(relativePath: { eq: "favicon.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

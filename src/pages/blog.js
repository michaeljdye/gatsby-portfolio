import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { Banner } from '../elements/Banners'
import { white, colorSecondary, colorPrimary } from '../utilities/Colors'
import { innerPadding, defaultPadding } from '../utilities/Padding'

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const [value, setValue] = useState('All')

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <Layout>
      <Banner>
        <h1>Blog</h1>
      </Banner>
      <section css="display: flex; justify-content: center;">
        <form>
          <select value={value} onChange={handleChange}>
            <option>All</option>
            <option>HTML</option>
            <option>JS</option>
            <option>CSS</option>
          </select>
        </form>
      </section>
      <section
        css={`
          padding: 0 ${innerPadding} ${defaultPadding};
        `}
      > 
        <ul css="display: flex; flex-wrap: wrap; justify-content: center; list-style: none;">
          {edges
            .filter(
              ({
                node: {
                  frontmatter: { category },
                },
              }) =>
                category.toLowerCase() === value.toLowerCase() ||
                value === 'All'
            )
            .map(
              ({
                node: {
                  excerpt,
                  frontmatter: { title, category },
                  fields: { slug },
                },
              }) => (
                <li
                  css={`
                    background: ${colorSecondary};
                    width: calc(33.33% - 80px);
                    padding: 40px;
                    color: ${white};

                    &:not(:last-child) {
                      margin-right: 40px;
                    }
                  `}
                >
                  <h2 css="font-size: 1.5rem">{title}</h2>
                  <p>{excerpt}</p>

                  <Link
                    css={`
                      display: flex;
                      align-items: center;
                      font-size: 1rem;
                      text-transform: capitalize;
                      text-decoration: none;
                      color: ${colorPrimary};
                    `}
                    to={`posts${slug}`}
                  >
                    Read More
                    <FontAwesomeIcon
                      css="margin-left: 10px;"
                      icon={faChevronRight}
                    />
                  </Link>
                  <p>{category}</p>
                </li>
              )
            )}
        </ul>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetPosts {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            title
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Blog

import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const BlogPost = ({ data: { markdownRemark: { html, frontmatter: { title } } } }) => {
	return (
		<Layout>
			<h1>{title}</h1>
			<div dangerouslySetInnerHTML={{ __html: html }} />
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

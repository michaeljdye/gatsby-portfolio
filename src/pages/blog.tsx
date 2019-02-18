import React from 'react'
import Layout from '../components/Layout'
import Listings from '../components/Listings'
import styled from 'styled-components'

const blog = () => (
  <Layout>
    <BlogContainer>
      <Listings />
    </BlogContainer>
  </Layout>
)

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #f7f7f7;
  padding: 2.5rem 0;
`

export default blog

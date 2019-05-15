import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const notFoundPage = () => (
  <Layout>
    <Container>
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

const Container = styled.div`
  padding: 80px;
`

export default notFoundPage

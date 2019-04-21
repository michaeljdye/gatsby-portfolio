import React from 'react'
import { FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'gatsby'
import { H2, ThanksWrapper } from '../elements'
import Layout from '../components/Layout'

export default function() {
  return (
    <>
      <Layout>
        <ThanksWrapper>
          <H2>Thanks for reaching out!</H2>
          <p>I will be in touch soon.</p>
          <Link to="/">
            <FaArrowAltCircleLeft />
            &nbsp;Back to home
          </Link>
        </ThanksWrapper>
      </Layout>
    </>
  )
}

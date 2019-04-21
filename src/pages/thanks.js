import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
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
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            &nbsp;Back to home
          </Link>
        </ThanksWrapper>
      </Layout>
    </>
  )
}

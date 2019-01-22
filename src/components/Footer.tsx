import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

export interface Props {}

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  height: 40vh;
  padding: ${props => props.theme.defaultPadding} 0;
  background: ${props => props.theme.colorTertiary};
  color: #fff;
`

const SocialIcons = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  span {
    padding-left: 10px;
  }
`

const HeadingTertiary = styled.h3`
  font-size: 1.935rem;
`

const Heading4 = styled.h4`
  font-size: 1.563rem;
`

const Paragraph = styled.p`
  margin-bottom: 10px;

  span {
    padding-left: 10px;
  }
`

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: calc(${props => props.theme.defaultPadding} / 3);
  background: #000;
  color: #fff;
  text-align: center;
  font-size: 0.875rem;
`

const Footer: React.SFC<Props> = () => {
  return (
    <>
      <FooterWrapper>
        <div>
          <HeadingTertiary>Joey Dye</HeadingTertiary>
          <SocialIcons>
            <li>
              <a>
                <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a>
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a>
                <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
                <span>Twitter</span>
              </a>
            </li>
          </SocialIcons>
        </div>
        <div>
          <Heading4>Contact</Heading4>
          <Paragraph>
            <FontAwesomeIcon icon={faEnvelope} color="white" size="lg" />
            <span>joey@joeydye.com</span>
          </Paragraph>
          <Paragraph>
            <FontAwesomeIcon icon={faPhone} color="white" size="lg" />
            <span>615-586-3316</span>
          </Paragraph>
        </div>
      </FooterWrapper>
      <Copyright>&copy; 2019 Joey Dye. All Rights Reserved.</Copyright>
    </>
  )
}

export default Footer

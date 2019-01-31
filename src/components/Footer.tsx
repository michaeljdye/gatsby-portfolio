import * as React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { media } from '../styles/mixins'

export interface Props {}

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  height: fit-content;
  padding: ${props => props.theme.defaultPadding} 0;
  background: ${props => props.theme.colorTertiary};
  color: #fff;

  ${media.phone`
    grid-template-columns: 1fr;
    grid-row-gap: 1.875rem;
    text-align: center;
    `}
`

const SocialIcons = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    color: #fff;
    text-decoration: none;
  }

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

  a {
    color: #fff;
    text-decoration: none;
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
              <a href="https://github.com/JoeyDye" target="_blank">
                <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dyejoey/" target="_blank">
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/joey_m_dye" target="_blank">
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
            <a href="&#109;&#97;ilt&#111;&#58;&#37;6A%&#54;Fe%79%40&#37;6&#65;&#111;eyd&#37;&#55;9%65&#46;&#99;o%&#54;D">
              j&#111;e&#121;&#64;&#106;oeydye&#46;&#99;om
            </a>
          </Paragraph>
          <Paragraph>
            <FontAwesomeIcon icon={faPhone} color="white" size="lg" />
            <a href="tel:6155863316">615-586-3316</a>
          </Paragraph>
        </div>
      </FooterWrapper>
      <Copyright>&copy; 2019 Joey Dye. All Rights Reserved.</Copyright>
    </>
  )
}

export default Footer

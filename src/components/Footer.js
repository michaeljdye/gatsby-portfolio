import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FooterWrapper, SocialIcons, Paragraph, Copyright } from '../elements'

const Footer = () => (
  <>
    <FooterWrapper>
      <div>
        <h3>Joey Dye</h3>
        <SocialIcons>
          <li>
            <a
              href="https://github.com/JoeyDye"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dyejoey/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="lg" />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/joey_m_dye"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
              <span>Twitter</span>
            </a>
          </li>
        </SocialIcons>
      </div>
      <div>
        <h4>Contact</h4>
        <Paragraph>
          <FontAwesomeIcon icon={faEnvelope} color="white" size="lg" />
          <a
            className="footer__content"
            href="&#109;&#97;ilt&#111;&#58;&#37;6A%&#54;Fe%79%40&#37;6&#65;&#111;eyd&#37;&#55;9%65&#46;&#99;o%&#54;D"
          >
            j&#111;e&#121;&#64;&#106;oeydye&#46;&#99;om
          </a>
        </Paragraph>
        <Paragraph>
          <FontAwesomeIcon icon={faMapMarker} color="white" size="lg" />
          <span className="footer__content">Nashville, TN</span>
        </Paragraph>
      </div>
    </FooterWrapper>
    <Copyright>&copy; 2019 Joey Dye. | All Rights Reserved.</Copyright>
  </>
)

export default Footer

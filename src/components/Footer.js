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
          <a
            className="footer__content"
            href="mailto&#58;joeymd%&#55;9e&#64;&#37;67m&#97;%6&#57;l&#46;%&#54;3%&#54;Fm"
          >
            <FontAwesomeIcon
              className="footer__icon"
              icon={faEnvelope}
              color="white"
              size="lg"
            />
            &#106;oey&#109;d&#121;e&#64;&#103;m&#97;i&#108;&#46;&#99;om
          </a>
        </Paragraph>
        <Paragraph>
          <span className="footer__content">
            <FontAwesomeIcon
              className="footer__icon"
              icon={faMapMarker}
              color="white"
              size="lg"
            />
            Nashville, TN
          </span>
        </Paragraph>
      </div>
    </FooterWrapper>
    <Copyright>&copy; 2019 Joey Dye. | All Rights Reserved.</Copyright>
  </>
)

export default Footer

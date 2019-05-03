import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Projects from '../components/Projects'
import MarketingSites from '../components/MarketingSites'
import Form from '../components/Form'
import Layout from '../components/Layout'
import {
  GoogleMap,
  FormWrapper,
  FormSection,
  AboutImg,
  AboutImgWrapper,
  AboutContent,
  AboutSection,
  Prefooter,
  Btn,
  ShowcaseContent,
  Showcase,
  H1,
  H2,
} from '../elements'

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

library.add(faArrowAltCircleRight, fab)

const indexPaige = () => (
  <>
    <Layout>
      <div>
        <Showcase>
          <ShowcaseContent>
            <H1 color="#111">Frontend Developer</H1>
            <p>
              Nashville-based developer specialized in React, JS, CSS and HTML.
            </p>
            <Btn mr="0" href="#about">
              Learn More &nbsp;
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Btn>
          </ShowcaseContent>
          <div className="showcase__rocket">
            <span role="img" aria-label="spaceship emoji">
              🚀
            </span>
          </div>
        </Showcase>
        <AboutSection id="about">
          <AboutImgWrapper>
            <AboutImg />
          </AboutImgWrapper>
          <AboutContent>
            <H2 left="0" margin="0 0 40px 0" className="underline">
              Hi, I'm Joey!
            </H2>
            <p>
              I use modern web technologies to build excellent user interfaces.
              While I specialize in the frontend, I also have strong knowledge
              of the backend, having built apps using Node.js, Express and
              MongoDB.
            </p>
            <p>
              I enjoy learning new technologies and am continuously focused on
              adding new libraries, frameworks, languages, and design patterns
              to my toolbox. I also have plenty of experience building marketing
              sites for clients on popular CMSs, such as WordPress and Drupal.
            </p>
            <Btn mr="0" href="#projects">
              View Projects
            </Btn>
          </AboutContent>
        </AboutSection>
        <Projects />
        <MarketingSites />
        <FormSection id="contact">
          <GoogleMap src={mapUrl} />
          <FormWrapper>
            <h2>Contact Me</h2>
            <Form />
          </FormWrapper>
        </FormSection>
        <Prefooter>
          {faIcons.map((iconClass, i) => (
            <FontAwesomeIcon
              className="prefooter__icon"
              key={i}
              icon={['fab', iconClass]}
              color="black"
              size="6x"
            />
          ))}
        </Prefooter>
      </div>
    </Layout>
  </>
)

export default indexPaige

const faIcons = ['js', 'css3', 'html5', 'react', 'angular', 'sass']

const mapUrl =
  'https://maps.googleapis.com/maps/api/staticmap?center=nashville,+tn&zoom=12&scale=2&size=2000x350&maptype=roadmap&key=AIzaSyD9uWFF2vnINFaBF_thHkVNEfurgRc-4Jo&format=png&visual_refresh=true&color:0xff0000%7Clabel:1%7Cnashville,+tn'

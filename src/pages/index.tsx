import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { darken, lighten } from 'polished'
import Layout from '../components/layout'
// import Image from '../components/image'
// import SEO from '../components/seo'
import ThemeWrapper from '../components/ThemeWrapper'
import Header from '../components/header'
import Footer from '../components/footer'
import heroImg from '../images/nashville-skyline-compressed.jpg'
import aboutImg from '../images/joey-dye-sf.jpg'
import Project from '../components/project'
import Form from '../components/Form'
import Head from '../components/Head'

library.add(faArrowAltCircleRight, fab)

const projects = [
  {
    name: 'Explore the Nations',
    description:
      "Explore The Nations features some of the top restaurants in one of Nashville's hippest neighborhoods.",
    source: 'https://github.com/JoeyDye/explore-the-nations',
    id: 1,
  },
  {
    name: 'My Reads',
    description:
      'The MyReads app provides a simple way to find new books and track your latest reads.',
    source: 'https://github.com/JoeyDye/my-reads',
    id: 2,
  },
  {
    name: 'Memory Match Game',
    description:
      'The memory match game is a play off the classic game known as Concentration.',
    source: 'https://github.com/JoeyDye/memory-match-game',
    id: 3,
  },
]

const Showcase = styled.section`
  padding: 20vh 17vh;
  height: calc(100vh - 88px);
  background: linear-gradient(
      150deg,
      ${props => props.theme.colorSecondary} 50%,
      ${props => props.theme.colorPrimary} 50%
    ),
    url(${heroImg});
  background-blend-mode: multiply;
`

const ShowcaseContent = styled.div`
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 2s;

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  p {
    color: #fff;
    width: 50%;
  }
`

const HeadingPrimary = styled.h1`
  font-size: 4.209rem;
  color: ${props => props.color};
`

const HeadingSecondary = styled.h2`
  font-size: 50.52px;
  color: ${props => props.color};
  text-align: ${(props: any) => props.position};
`

const Btn = styled.button`
  border: none;
  padding: 5px 15px;
  background: ${props => props.theme.colorPrimary};
  font-weight: 600;
  text-transform: uppercase;
  color: #111;
  transition: all 0.2s linear;

  &:hover {
    background: ${props => lighten(0.2, props.theme.colorPrimary)};
  }
`

const Prefooter = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 20vh;
  background: ${props => props.theme.colorPrimary};
`

const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: #f3f3f3;
  color: #000;

  button {
    align-self: flex-start;
  }

  h2 {
    position: relative;
  }

  .underline:after {
    content: '';
    display: block;
    position: absolute;
    top: 80%;
    left: -1%;
    width: 28%;
    height: 10px;
    background: ${props => darken(0.2, props.theme.colorPrimary)};
    opacity: 0.5;
    transform: skewX(30deg);
  }
`

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${props => props.theme.defaultPadding};
  height: 70vh;
`

const AboutImg = styled.div`
  display: flex;
  background: center 20% url(${aboutImg});
  background-blend-mode: overlay;
  background-size: cover;
`
const ProjectsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: calc(${props => props.theme.defaultPadding} / 2);
  grid-row-gap: ${props => props.theme.defaultPadding};
  padding: ${props => props.theme.defaultPadding};
  text-align: center;
  background: ${props => props.theme.colorSecondary};

  h2 {
    grid-column: 1 / -1;
    position: relative;
    margin-bottom: 0;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 80%;
      left: 42%;
      width: 16%;
      height: 10px;
      background: ${props => props.theme.colorPrimary};
      opacity: 0.5;
      transform: skewX(30deg);
    }
  }
`

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.defaultPadding};
  color: #f3f3f3;
  position: relative;

  h2 {
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 80%;
      left: 16%;
      width: 70%;
      height: 10px;
      background: ${props => props.theme.colorPrimary};
      opacity: 0.5;
      transform: skewX(30deg);
    }
  }
`

const FormWrapper = styled.div`
  padding: calc(${props => props.theme.defaultPadding});
  background: ${props => props.theme.colorSecondary};
  border: 5px solid ${props => props.theme.colorPrimary};
  width: 40vw;
`

const GoogleMap = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`

const IndexPage: React.SFC = () => (
  <ThemeWrapper>
    <div>
    <Head />
      <Header />
      <Showcase>
        <ShowcaseContent>
          <HeadingPrimary color="white">Front-End Developer</HeadingPrimary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Btn>
            Learn More &nbsp;
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </Btn>
        </ShowcaseContent>
      </Showcase>
      <AboutSection>
        <AboutImg />
        <AboutContent>
          <HeadingSecondary className="underline" color="black" position="left">
            About Me
          </HeadingSecondary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Btn>Learn More</Btn>
        </AboutContent>
      </AboutSection>
      <ProjectsSection>
        <HeadingSecondary color="white" position="center">
          Projects
        </HeadingSecondary>
        {projects.map(project => (
          <Project
            key={project.id}
            name={project.name}
            description={project.description}
            source={project.source}
          />
        ))}
      </ProjectsSection>
      <FormSection>
        <GoogleMap src="mapUrl" />
        <FormWrapper>
          <HeadingSecondary color="white" position="center">
            Contact Me
          </HeadingSecondary>
          <Form />
        </FormWrapper>
      </FormSection>
      <Prefooter>
        <FontAwesomeIcon icon={['fab', 'js']} color="black" size="6x" />
        <FontAwesomeIcon icon={['fab', 'css3']} color="black" size="6x" />
        <FontAwesomeIcon icon={['fab', 'html5']} color="black" size="6x" />
        <FontAwesomeIcon icon={['fab', 'react']} color="black" size="6x" />
        <FontAwesomeIcon icon={['fab', 'angular']} color="black" size="6x" />
        <FontAwesomeIcon icon={['fab', 'sass']} color="black" size="6x" />
      </Prefooter>
      <Footer />
    </div>
  </ ThemeWrapper>
)

export default IndexPage

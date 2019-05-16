import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { below } from '../utilities'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { H3, H2 } from '../elements'
import exploreTheNations from '../images/explore-the-nations.png'
import myReads from '../images/my-reads.png'
import memoryMatchGame from '../images/memory-match-game.png'

const Projects = () => (
  <ProjectsWrapper id="projects">
    <H2 left="55px" color="#111" align="center">
      Web Apps{' '}
      <span role="img" aria-label="Fire emoji">
        🔥
      </span>
    </H2>
    <ProjectContainer>
      <ProjectContent>
        <H3>
          <span>My Reads</span>
        </H3>
        <p>
          The MyReads app provides a simple way to find new books and track your
          latest reads. Features include search books, add to bookshelf, track
          reads, and bulk move.
        </p>
        <p>
          <strong>React | React Router | JS | CSS</strong>
        </p>
        <div>
          <ProjectLink
            href="https://github.com/JoeyDye/my-reads"
            target="_blank"
            rel="noopener noreferrer"
            color="#845DC0"
          >
            View Source{' '}
            <FontAwesomeIcon
              size="sm"
              color={darken(0.1, '#845DC0')}
              icon={faChevronRight}
            />
          </ProjectLink>
          <ProjectLink
            href="https://myreads-5icjs7wez.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
            color="#845DC0"
          >
            View Demo{' '}
            <FontAwesomeIcon
              size="sm"
              color={darken(0.1, '#845DC0')}
              icon={faChevronRight}
            />
          </ProjectLink>
        </div>
      </ProjectContent>
      <ProjectImgWrap>
        <ProjectImg src={myReads} alt="My Reads app" />
      </ProjectImgWrap>
    </ProjectContainer>
    <ProjectContainer>
      <ProjectContent gridCol="2/3">
        <H3>
          <span>Explore the Nations</span>
        </H3>
        <p>
          Explore The Nations features some of the top restaurants in The
          Nations. The app works with the Yelp and Google maps APIs to retrieve
          dynamic data about each location. In addition, Styled Components are
          used for applying custom styles.
        </p>
        <p>
          <strong>
            React | Google Maps API | Yelp API | Styled Components
          </strong>
        </p>
        <div>
          <ProjectLink
            href="https://github.com/JoeyDye/explore-the-nations"
            target="_blank"
            rel="noopener noreferrer"
            color="#845DC0"
          >
            View Source{' '}
            <FontAwesomeIcon
              size="sm"
              color={darken(0.1, '#845DC0')}
              icon={faChevronRight}
            />
          </ProjectLink>
          <ProjectLink
            href="https://explorethenations-86j0hrveh.now.sh/"
            target="_blank"
            rel="noopener noreferrer"
            color="#845DC0"
          >
            View Demo{' '}
            <FontAwesomeIcon
              size="sm"
              color={darken(0.1, '#845DC0')}
              icon={faChevronRight}
            />
          </ProjectLink>
        </div>
      </ProjectContent>
      <ProjectImgWrap gridCol="1/2">
        <ProjectImg src={exploreTheNations} alt="Explore The Nations app" />
      </ProjectImgWrap>
    </ProjectContainer>
    <ProjectContainer>
      <ProjectContent>
        <H3>
          <span>Memory Match Game</span>
        </H3>
        <p>
          A modern twist on the classic card game Concentration. The app uses
          vanilla JS written in modern ES6 syntax to manipulate DOM elements as
          users attempt to select matching cards.
        </p>
        <p>
          <strong>JS | CSS | HTML</strong>
        </p>
        <div>
          <ProjectLink
            href="https://github.com/JoeyDye/memory-match-game"
            target="_blank"
            rel="noopener noreferrer"
            color="#845DC0"
          >
            View Source{' '}
            <FontAwesomeIcon
              size="sm"
              color={darken(0.1, '#845DC0')}
              icon={faChevronRight}
            />
          </ProjectLink>
          <ProjectLink
            href="https://confident-hodgkin-027b22.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="#845DC0"
          >
            View Demo{' '}
            <FontAwesomeIcon
              size="sm"
              color={darken(0.1, '#845DC0')}
              icon={faChevronRight}
            />
          </ProjectLink>
        </div>
      </ProjectContent>
      <ProjectImgWrap>
        <ProjectImg src={memoryMatchGame} alt="Memory Match Game app" />
      </ProjectImgWrap>
    </ProjectContainer>
  </ProjectsWrapper>
)

const ProjectsWrapper = styled.div`
  padding: 80px 40px 0;
  background: #fff;

  ${below.tablet`
    h2 {
      margin-bottom: 50px;
    }
  `}

  ${below.phone`
      padding: 80px 20px 0 20px;
  `}
`

const ProjectContainer = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 80px 0;

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #ebebeb;
  }

  ${below.tablet`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-row-gap: 40px;
    border: none;
    padding 80px 0 40px 0;

    &:last-child {
      padding-bottom: 0;
    }

    h3,
    p,
    div {
      text-align: center;
    }
  `}

  ${below.phone`
    padding-top: 0;
  `}
`

const ProjectLink = styled.a`
  margin-right: 10px;
  color: ${props => darken(0.1, props.color)};
  text-decoration: none;
  transition: all 0.2s linear;

  &:hover,
  &:hover > svg {
    color: ${props => darken(0.3, props.color)};
  }
`

const ProjectImg = styled.img`
  text-align: center;
  margin-bottom: 0;
  box-shadow: 0px 0px 10px #e3e3e3;
  width: 100%;
  height: 100%;
`

const ProjectContent = styled.div`
  grid-column: ${props => props.gridCol || '1/1'};
  width: 75%;
  margin: 0 auto;
  color: #111;

  ${below.tablet`
    grid-column: 1/-1;
  `}

  ${below.phone`
    align-self: start;
  `}
`

const ProjectImgWrap = styled.div`
  grid-column: ${props => props.gridCol || '2/3'};
  text-align: center;
  max-width: 400px;
  margin: 0 auto;

  ${below.tablet`
    grid-column: 1/-1;
    grid-row: 1/2;
  `}

  ${below.phone`
    align-self: end;
    width: 85%;
    margin: 0 auto;
  `}
`

export default Projects

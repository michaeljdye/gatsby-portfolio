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
          latest reads.
        </p>
        <p>
          <strong>React | CSS | JS</strong>
        </p>
        <div>
          <ProjectLink
            href="https://github.com/JoeyDye/my-reads"
            target="_blank"
            rel="noopener noreferrer"
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
        <ProjectImg src={myReads} alt="My Reads app" width="400" />
      </ProjectImgWrap>
    </ProjectContainer>
    <ProjectContainer>
      <ProjectContent gridCol="2/3">
        <H3>
          <span>Explore the Nations</span>
        </H3>
        <p>
          Explore The Nations features some of the top restaurants in The
          Nations.
        </p>
        <p>
          <strong>React | React Router | Google Maps API | Yelp API</strong>
        </p>
        <div>
          <ProjectLink
            href="https://github.com/JoeyDye/explore-the-nations"
            target="_blank"
            rel="noopener noreferrer"
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
        <ProjectImg
          src={exploreTheNations}
          alt="Explore The Nations app"
          width="400"
        />
      </ProjectImgWrap>
    </ProjectContainer>
    <ProjectContainer>
      <ProjectContent>
        <H3>
          <span>Memory Match Game</span>
        </H3>
        <p>Match the cards to win the game.</p>
        <p>
          <strong>HTML | CSS | JS</strong>
        </p>
        <div>
          <ProjectLink
            href="https://github.com/JoeyDye/memory-match-game"
            target="_blank"
            rel="noopener noreferrer"
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
        <ProjectImg
          src={memoryMatchGame}
          alt="Memory Match Game app"
          width="400"
        />
      </ProjectImgWrap>
    </ProjectContainer>
  </ProjectsWrapper>
)

const ProjectsWrapper = styled.div`
  padding: 80px 150px 0 150px;
  background: #fff;

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
  border-bottom: 1px solid #ebebeb;

  ${below.tablet`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 40px;

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
  color: ${darken(0.1, '#845DC0')};
  text-decoration: none;
`

const ProjectImg = styled.img`
  text-align: center;
  margin-bottom: 0;
  box-shadow: 0px 0px 10px #e3e3e3;
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

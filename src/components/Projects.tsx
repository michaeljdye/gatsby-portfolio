import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { darken } from 'polished'
import { H3 } from '../elements'
import exploreTheNations from '../images/explore-the-nations.png'
import myReads from '../images/my-reads.png'
import memoryMatchGame from '../images/memory-match-game.png'

const Projects: React.SFC<{}> = () => (
  <div
    id="projects"
    style={{ padding: '80px 150px 0 150px', background: '#fff' }}
  >
    <h2 style={{ textAlign: 'center', color: '#111' }}>Web Apps 🔥</h2>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: '80px 0',
        borderBottom: '1px solid #ebebeb',
      }}
    >
      <div
        style={{
          width: '75%',
          margin: '0 auto',
          color: '#111',
        }}
      >
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
          <a
            style={{
              marginRight: '10px',
              color: darken(0.1, '#845DC0'),
            }}
            href="https://github.com/JoeyDye/my-reads"
            target="_blank"
          >
            View Source{' '}
            <FontAwesomeIcon
              size="sm"
              color={darken(0.1, '#845DC0')}
              icon={faChevronRight}
            />
          </a>
          <a
            style={{
              marginRight: '10px',
              color: darken(0.1, '#845DC0'),
            }}
            href="https://myreads-5icjs7wez.now.sh/"
            target="_blank"
          >
            View Demo{' '}
            <FontAwesomeIcon
              size="sm"
              color={darken(0.1, '#845DC0')}
              icon={faChevronRight}
            />
          </a>
        </div>
      </div>
      <div>
        <img
          src={myReads}
          alt="My Reads app"
          width="400"
          style={{
            textAlign: 'center',
            marginBottom: 0,
            boxShadow: '0px 0px 10px #e3e3e3',
          }}
        />
      </div>
    </div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gridAutoFlow: 'dense',
        padding: '80px 0',
        borderBottom: '1px solid #ebebeb',
      }}
    >
      <div
        style={{
          gridColumn: '2 / 3',
          width: '75%',
          margin: '0 auto',
          color: '#111',
        }}
      >
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
          <a
            style={{
              marginRight: '10px',
              color: darken(0.1, '#845DC0'),
            }}
            href="https://github.com/JoeyDye/explore-the-nations"
            target="_blank"
          >
            View Source{' '}
            <FontAwesomeIcon
              size="sm"
              color={darken(0.1, '#845DC0')}
              icon={faChevronRight}
            />
          </a>
          <a
            style={{
              marginRight: '10px',
              color: darken(0.1, '#845DC0'),
            }}
            href="https://explorethenations-86j0hrveh.now.sh/"
            target="_blank"
          >
            View Demo{' '}
            <FontAwesomeIcon
              size="sm"
              color={darken(0.1, '#845DC0')}
              icon={faChevronRight}
            />
          </a>
        </div>
      </div>
      <div style={{ gridColumn: '1 / 2', textAlign: 'center' }}>
        <img
          src={exploreTheNations}
          alt="Explore The Nations app"
          width="400"
          style={{
            textAlign: 'center',
            marginBottom: 0,
            boxShadow: '0px 0px 10px #e3e3e3',
          }}
        />
      </div>
    </div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        padding: '80px 0',
        borderBottom: '1px solid #ebebeb',
      }}
    >
      <div
        style={{
          flexDirection: 'column',
          width: '75%',
          margin: '0 auto',
          color: '#111',
        }}
      >
        <H3>
          <span>Memory Match Game</span>
        </H3>
        <p>Match the cards to win the game.</p>
        <p>
          <strong>HTML | CSS | JS</strong>
        </p>
        <div>
          <a
            style={{
              marginRight: '10px',
              color: darken(0.1, '#845DC0'),
            }}
            href="https://github.com/JoeyDye/memory-match-game"
            target="_blank"
          >
            View Source{' '}
            <FontAwesomeIcon
              size="sm"
              color={darken(0.1, '#845DC0')}
              icon={faChevronRight}
            />
          </a>
          <a
            style={{
              marginRight: '10px',
              color: darken(0.1, '#845DC0'),
            }}
            href="https://confident-hodgkin-027b22.netlify.com/"
            target="_blank"
          >
            View Demo{' '}
            <FontAwesomeIcon
              size="sm"
              color={darken(0.1, '#845DC0')}
              icon={faChevronRight}
            />
          </a>
        </div>
      </div>
      <div>
        <img
          src={memoryMatchGame}
          alt="Memory Match Game app"
          width="400"
          style={{
            textAlign: 'center',
            marginBottom: 0,
            boxShadow: '0px 0px 10px #e3e3e3',
          }}
        />
      </div>
    </div>
  </div>
)

export default Projects

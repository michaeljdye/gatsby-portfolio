import styled from 'styled-components'
import { lighten } from 'polished'
import heroImg from '../images/nashville-skyline-compressed.jpg'
import aboutImg from '../images/joey-dye-sf.jpg'
import { media } from '../styles/mixins'

export const Showcase = styled.section`
  padding: 10vw 10vw;
  height: calc(100vh - 88px);
  width: 100%;
  background: linear-gradient(
      150deg,
      ${props => props.theme.colorSecondary} 50%,
      ${props => props.theme.colorPrimary} 50%
    ),
    url(${heroImg});
  background-blend-mode: multiply;

  ${media.phone`
  background: linear-gradient(
      to right,
      ${props => props.theme.colorSecondary} 0,
      ${props => props.theme.colorSecondary} 100%
    ),
    url(${heroImg});
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  `}
`

export const ShowcaseContent = styled.div`
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
    line-height: 1.5;

    ${media.phone`width: 100%;`}
  }
`

export const HeadingPrimary = styled.h1`
  font-size: 4.209rem;
  line-height: 1;
  color: ${props => props.color};
`

export const HeadingSecondary = styled.h2`
  font-size: 50.52px;
  color: ${props => props.color};
  text-align: ${(props: any) => props.position};
`

export const Btn = styled.a`
  padding: 7px 15px;
  background: ${props => props.theme.colorPrimary};
  font-weight: 600;
  text-transform: uppercase;
  color: #111;
  text-decoration: none;
  transition: all 0.2s linear;

  ${media.phone`
    margin: 0 auto;
  `}

  &:hover {
    background: ${props => lighten(0.2, props.theme.colorPrimary)};
  }
`

export const Prefooter = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  height: fit-content;
  background: ${props => props.theme.colorPrimary};
  padding: 2.5rem;

  ${media.phone`
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;

    svg {
      margin-bottom: 1.25rem;
    }
  `}
`

export const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  color: #000;

  ${media.phone`
    grid-template-columns: 1fr;
    text-align: center;
  `}

  a {
    align-self: flex-start;
  }

  h2 {
    position: relative;

    span {
      position: relative;
      display: inline-block;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -10px;
        width: calc(100% + 20px);
        z-index: -1;
        height: 40%;
        background: ${props => props.theme.colorPrimary};
        opacity: 0.5;
        transform: skewX(30deg);
      }
    }

    ${media.phone`
    text-align: center;
  `}
  }
`

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(${props => props.theme.defaultPadding} * 2)
    calc(${props => props.theme.defaultPadding} * 1.5);
  height: fit-content;

  ${media.phone`
  padding: ${props => props.theme.defaultPadding} 3rem;
  `};
`

export const AboutImg = styled.div`
  display: flex;
  background: center 20% url(${aboutImg});
  background-blend-mode: overlay;
  background-size: cover;
  width: 100%;
  min-height: 400px;
`
export const ProjectsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: calc(${props => props.theme.defaultPadding} / 2);
  grid-row-gap: ${props => props.theme.defaultPadding};
  padding: ${props => props.theme.defaultPadding};
  text-align: center;
  background: ${props => props.theme.colorSecondary};

  ${media.phone`
    grid-template-columns: 1fr;
  `}

  h2 {
    grid-column: 1 / -1;
    margin-bottom: 0;
    color: #fff !important;
  }
`

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.defaultPadding};
  color: #f3f3f3;
  position: relative;

  ${media.phone`
    grid-row: 1 / 2;
    padding: 0;
  `}

  ${media.phone`
    position: initial;
  `}

  h2 {
    position: relative;
    line-height: 1;
  }
`

export const FormWrapper = styled.div`
  padding: calc(${props => props.theme.defaultPadding});
  background: ${props => props.theme.colorSecondary};
  border: 5px solid ${props => props.theme.colorPrimary};
  width: 40vw;

  ${media.phone`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
  `}
`

export const GoogleMap = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
  margin-bottom: 0;

  ${media.phone`
    position: static;
    height: 350px;
  `}
`

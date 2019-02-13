import styled from 'styled-components'
import {
  below,
  defaultPadding,
  colorTertiary,
  colorPrimary,
  colorSecondary,
} from '../utilities'
import heroImg from '../images/nashville-skyline-compressed.jpg'

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: #0b0c10;
  padding: 20px 0;

  ${below.phone`
    grid-template-columns: 1fr;
  `}
`

export const ProjectWrapper = styled.section`
  color: ${props => props.color};

  h3 {
    align-items: center;
    color: ${props => props.color};
  }
`

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  height: fit-content;
  padding: ${defaultPadding} 0;
  background: ${colorTertiary};
  color: #fff;

  ${below.phone`
    grid-template-columns: 1fr;
    grid-row-gap: 1.875rem;
    text-align: center;
    `}

  h3 {
    font-size: 1.935rem;
  }

  h4 {
    font-size: 1.563rem;
  }

  .footer__content {
    padding-left: 10px;
  }
`

export const FormWrapper = styled.div`
  padding: calc(${defaultPadding});
  background: ${colorSecondary};
  border: 5px solid ${colorPrimary};
  width: 40vw;

  ${below.tablet`
    width: 70vw;
    margin: 60px;
  `}

  ${below.phone`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    margin: 0;
  `}
`

export const FormSection: any = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${defaultPadding};
  color: #f3f3f3;
  position: relative;

  ${below.tablet`
    padding: 0;
  `}

  ${below.phone`
    flex-direction: column-reverse;
    grid-row: 1 / 2;
    padding: 0;
    position: initial;
  `}

  h2 {
    font-size: 50.52px;
    color: #fff;
    text-align: center;
    position: relative;
    line-height: 1;
  }
`

export const ProjectsSection: any = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: calc(${defaultPadding} / 2);
  grid-row-gap: ${defaultPadding};
  padding: ${defaultPadding};
  text-align: center;
  background: ${colorSecondary};

  ${below.tablet`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${below.phone`
    grid-template-columns: 1fr;
    padding: ${defaultPadding} calc(${defaultPadding} / 2);
  `}

  h2 {
    font-size: 50.52px;
    color: #fff;
    text-align: center;
    grid-column: 1 / -1;
    margin-bottom: 0;
    color: #fff !important;
  }
`

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: calc(${defaultPadding} * 2) calc(${defaultPadding} * 1.5);
  height: fit-content;

  ${below.tablet`
    padding: calc(${defaultPadding} / 2);
  `}

  ${below.phone`
  padding: ${defaultPadding} 3rem;
  `};

  a {
    ${below.phone`
        margin:  0 auto;
    `}
  }
`

export const AboutSection: any = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  color: #000;

  ${below.tablet`
    grid-template-columns: 2fr 3frr;
  `}

  ${below.phone`
    grid-template-columns: 1fr;
    text-align: center;
  `}

  a {
    align-self: flex-start;
  }

  h2 {
    font-size: 50.52px;
    text-align: left;
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
        background: ${colorPrimary};
        opacity: 0.5;
        transform: skewX(30deg);
      }
    }

    ${below.phone`
      text-align: center;
  `}
  }
`

export const Prefooter = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  height: fit-content;
  background: ${colorPrimary};
  padding: 2.5rem;

  ${below.tablet`
    svg {
      font-size: 4rem;
    }
  `}

  ${below.phone`
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;
    padding: ${defaultPadding} 2.5rem;

    svg {
      font-size: 6rem;
    }

    svg:not(:last-child) {
      margin-bottom: 2rem;
    }
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

    ${below.tablet`width: 100%;`}
  }
`

export const Showcase = styled.section`
  padding: 10vw 10vw;
  height: calc(100vh - 88px);
  width: 100%;
  background: linear-gradient(
      150deg,
      ${colorSecondary} 50%,
      ${colorPrimary} 50%
    ),
    url(${heroImg});
  background-blend-mode: multiply;

  @media screen and (max-width: 48em) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(
        to right,
        ${colorSecondary} 100%,
        ${colorPrimary} 0
      ),
      url(${heroImg});
    height: 70vh;
  }

  h1 {
    font-size: 4.209rem;
    line-height: 1;
    color: #fff;

    ${below.phone`
      font-size: 3.75rem;
    `}
  }
`

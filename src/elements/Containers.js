import styled from 'styled-components'
import { darken } from 'polished'
import {
  below,
  defaultPadding,
  colorTertiary,
  colorPrimary,
  colorSecondary,
  colorFour,
} from '../utilities'

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: #0b0c10;
  padding: 20px 0;

  ${below.tablet`
    grid-template-columns: 1fr;
    justify-items: center;
    grid-row-gap: 20px;
    padding: 30px 0;

    h1 a.header__link {
      margin-left: 0;
    }

    ul {
      margin-right: 0;
    }
  `}

  ${below.phone`
    ul {
      font-size: 14px;
    }
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
  height: auto;
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

  a:hover,
  a:hover > svg {
    color: ${colorFour};
  }

  .footer__icon {
    margin-right: 10px;
  }

  .footer__content {
    padding-left: 0;
  }
`

export const FormWrapper = styled.div`
  padding: calc(${defaultPadding});
  background: ${colorSecondary};
  border: 5px solid ${colorPrimary};
  width: 40vw;

  ${below.tablet`
    width: 70vw;
  `}

  ${below.phone`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    margin: 0;
    padding: 80px 40px;
  `}
`

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${defaultPadding};
  color: #f3f3f3;
  position: relative;
  min-height: 750px;

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
    color: #fff;
    text-align: center;
    position: relative;
    line-height: 1;
  }
`

export const Grid3Col = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: calc(${defaultPadding} / 2);
  grid-row-gap: ${props => props.rowGap}rem;
  padding: ${defaultPadding};
  text-align: center;
  background: ${props => props.color};

  ${below.tablet`
    grid-template-columns: 1fr;
    grid-row-gap: 2.7rem;
    padding: ${defaultPadding} calc(${defaultPadding} / 2);
  `}

  h2 {
    color: ${props => (props.color === colorSecondary ? '#fff' : '#111')};
    text-align: center;
    grid-column: 1 / -1;
    margin-bottom: 0;
  }

  img {
    height: auto;
    max-width: 400px;
    width: 100%;
    cursor: pointer;
  }
`

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc(${defaultPadding} * 1.5) 0;
  height: fit-content;

  ${below.tablet`
    padding: 40px 40px 0 40px;

    h2 {
      margin: 0 auto 40px;

      &:after {
        left: 75px;
      }
    }
  `}

  ${below.phone`
  padding: 40px 0 0  0;
  `};

  a {
    ${below.phone`
        margin:  0 auto;
    `}
  }
`

export const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  justify-items: center;
  color: #111;
  background: #fff;
  padding: 0 50px;

  ${below.tablet`
    grid-template-columns: 1fr;
    text-align: center;
  `}

  a {
    align-self: flex-start;

    ${below.tablet`
      margin: 0 auto;
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

  ${below.tablet`
    align-self: start;
  `}

  h1 {
    margin-bottom: 10px;
  }

  p {
    color: #fff;
    line-height: 1.5;
    font-size: 24px;
    color: #777;
    font-weight: 600;

    ${below.tablet`width: 100%;`}
  }
`

export const Showcase = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  padding: 10vw;
  height: auto;
  width: 100%;

  .showcase__rocket {
    font-size: 150px;
  }

  ${below.tablet`
    grid-template-columns: 1fr;
    grid-auto-flow: dense;
    justify-items: center;
    text-align: center;
    height: fit-content;
    padding: 80px 40px;

    .showcase__rocket {
      grid-row: 1/1;
      align-self: end;
      font-size: 100px;
    }
  `}

  h1 {
    line-height: 1;
    color: #111;

    ${below.phone`
      font-size: 3.75rem;
    `}
  }
`

// Flex Box Wrapper
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent};
`

// About Image Wrapper
export const AboutImgWrapper = styled.div`
  height: 400px;
  max-height: 400px;
  width: 400px;
  max-width: 400px;

  ${below.phone`
    max-height: 250px;
    width: 250px;
  `}
`

// Thank you page wrapper
export const ThanksWrapper = styled.div`
  padding: ${defaultPadding} 0;
  margin: 0 auto;
  text-align: center;

  h2 {
    margin-bottom: 40px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${darken(0.1, '#845DC0')};
    text-decoration: none;
  }
`

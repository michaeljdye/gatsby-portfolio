import styled from 'styled-components'
import { below } from '../utilities'
import aboutImg from '../images/joey-dye-sf.jpg'

export const ProjectImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: bottom center rgba(0, 0, 0, 0.5) url(${props => props.img});
  background-blend-mode: overlay;
  background-size: cover;
  width: 100%;
  height: 12.5rem;
  margin-bottom: 1.25rem;
  border-radius: 3px;

  h3 {
    width: 80%;
    color: #fff;
  }
`

export const GoogleMap = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: -1;
  margin-bottom: 0;
  filter: grayscale(100%) invert(100%);

  ${below.phone`
    position: static;
    height: 350px;
  `}
`

export const AboutImg = styled.div`
  display: flex;
  background: center 20% url(${aboutImg});
  background-blend-mode: overlay;
  background-size: cover;
  height: 100%;
  width: 100%;
  border-radius: 50%;
`

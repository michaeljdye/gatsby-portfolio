import styled from 'styled-components'
import { below } from '../utilities'
import aboutImg from '../images/joey-dye-sf.jpg'

export const ProjectImg: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: bottom center rgba(0, 0, 0, 0.5) url(${(props: any) => props.img});
  background-blend-mode: overlay;
  background-size: cover;
  width: 100%;
  height: 12.5rem;
  margin-bottom: 1.25rem;
  border-radius: 3px;
`

export const GoogleMap = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
  margin-bottom: 0;

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
  width: 100%;
  min-height: 400px;
`

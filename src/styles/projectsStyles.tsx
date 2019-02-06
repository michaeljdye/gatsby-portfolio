import styled from 'styled-components'
import { lighten } from 'polished'

export const ProjectWrapper = styled.section`
  color: ${props => props.color};

  h3 {
    align-items: center;
    color: ${props => props.color};
  }
`

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
export const ProjectBtn = styled.a`
  margin: 0 10px 0 0;
  padding: 3px 10px;
  background: ${props => props.theme.colorPrimary};
  font-weight: 600;
  color: #000;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    background: ${props => lighten(0.2, props.theme.colorPrimary)};
  }
`

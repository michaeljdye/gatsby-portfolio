import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { lighten } from 'polished'
import { relative } from 'path'

export interface Props {
  name: string
  description: string
  source: string
  demo: string
  img: string
}

const ProjectWrapper = styled.section`
  color: ${props => props.color};
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5) url(${(props: any) => props.img});
  background-blend-mode: overlay;
  background-size: cover;
  width: 100%;
  height: 12.5rem;
  margin-bottom: 1.25rem;
  border-radius: 3px;
`

const HeadingTertiary = styled.h3`
  align-items: center;
  color: ${props => props.color};
`
const ProjectBtn = styled.a`
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

const Project: React.SFC<Props> = props => {
  console.log(props)
  return (
    <ProjectWrapper color="white">
      <ImgWrapper img={props.img}>
        <HeadingTertiary color="white">{props.name}</HeadingTertiary>
      </ImgWrapper>
      <p>{props.description}</p>
      <ProjectBtn href={props.source} target="_blank">
        Source
      </ProjectBtn>
      <ProjectBtn href={props.demo} target="_blank">
        Demo
      </ProjectBtn>
    </ProjectWrapper>
  )
}

export default Project

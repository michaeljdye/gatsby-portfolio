import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { lighten } from 'polished'

export interface Props {
  name: string
  description: string
  source: string
  demo: string
}

const ProjectWrapper = styled.section`
  color: ${props => props.color};
`
const HeadingTertiary = styled.h3`
  color: ${props => props.color};
  margin-top: 0.625rem;
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
  return (
    <ProjectWrapper color="white">
      <FontAwesomeIcon icon={faBriefcase} color="white" size="3x" />
      <HeadingTertiary color="white">{props.name}</HeadingTertiary>
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

import styled from '../models/styledComponents'
import { lighten } from 'polished'

export const ContactForm = styled.form`
  display: grid;
  justify-content: center;
  grid-row-gap: 1.125rem;
  margin-top: 40px;
`

export const FormBtn = styled.button`
  border: none;
  margin: 0;
  padding: 3px 0.625rem;
  background: ${props => props.theme.colorPrimary};
  font-weight: 600;

  &:hover {
    background: ${props => lighten(0.2, props.theme.colorPrimary)};
  }
`

export const FormLabel = styled.label`
  padding: 0 0.625rem;
  color: #fff;
  font-weight: 600;
`
export const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid #fff;
  background: none;
  color: #fff;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${props => props.theme.colorPrimary};
  }

  &::placeholder {
    color: #fff;
  }
`

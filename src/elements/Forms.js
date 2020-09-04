import styled from 'styled-components'
import { lighten } from 'polished'
import { colorPrimary } from '../utils'

export const ContactForm = styled.form`
  display: grid;
  justify-content: center;
  grid-row-gap: 1.125rem;
  margin-top: 40px;

  p {
    color: #fff;
  }
`

export const FormBtn = styled.button`
  border: none;
  margin: 0;
  padding: 3px 0.625rem;
  background: ${colorPrimary};
  font-weight: 600;

  &:hover {
    background: ${lighten(0.2, colorPrimary)};
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
  font-weight: 500;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${colorPrimary};
  }

  &::placeholder {
    color: #fff;
  }
`
export const TextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  color: #fff;
  font-weight: 500;

  &:focus {
    outline: none;
    border-bottom: 1px solid ${colorPrimary};
  }
`

import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faEnvelope,
  faPaperPlane,
  faFileExcel,
} from '@fortawesome/free-solid-svg-icons'

const ContactForm = styled.form`
  display: grid;
  justify-content: center;
  grid-row-gap: 1.125rem;
  margin-top: 40px;
`

const FormBtn = styled.button`
  border: none;
  margin: 0;
  padding: 3px 0.625rem;
  background: ${props => props.theme.colorPrimary};
  font-weight: 600;

  &:hover {
    background: ${props => lighten(0.2, props.theme.colorPrimary)};
  }
`

const FormLabel = styled.label`
  padding: 0 0.625rem;
  color: #fff;
  font-weight: 600;
`
const FormInput = styled.button`
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

const Form = () => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
    // <ContactForm
    //   name="contact"
    //   method="post"
    //   action="/success"
    //   netlify-honeypot="bot-field"
    //   data-netlify="true"
    // >
    //   <p>
    //     <FormLabel htmlFor="name">
    //       <FontAwesomeIcon icon={faUser} color="white" size="lg" />
    //       &nbsp;
    //       <FormInput id="name" type="text" name="name" />
    //     </FormLabel>
    //   </p>
    //   <p>
    //     <FormLabel htmlFor="email">
    //       <FontAwesomeIcon icon={faEnvelope} color="white" size="lg" />
    //       &nbsp;
    //       <FormInput id="email" type="email" name="email" />
    //     </FormLabel>
    //   </p>
    //   <p style={{ display: 'flex', justifyContent: 'center' }}>
    //     <FormBtn type="submit">
    //       Send&nbsp;
    //       <FontAwesomeIcon icon={faPaperPlane} color="black" size="lg" />
    //     </FormBtn>
    //   </p>
    // </ContactForm>
  )
}

export default Form

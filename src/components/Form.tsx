import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faEnvelope,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  justify-items: center;
  align-items: center;
  color: #000;
`

const ContactForm = styled.form`
  display: grid;
  grid-row-gap: 1.125rem;
  margin-top: 20px;
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
const FormInput = styled.input`
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

const FormTextarea = styled.textarea`
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
    <ContactForm name="contact" method="POST" data-netlify="true">
      <p>
        <FormLabel htmlFor="first-name">
          Your Name: <FormInput type="text" name="name" id="first-name" />
        </FormLabel>
      </p>
      <p>
        <FormLabel htmlFor="last-name">
          Your Email: <FormInput type="email" name="email" id="last-name" />
        </FormLabel>
      </p>
      <p>
        <FormLabel htmlFor="message">
          Message: <FormTextarea name="message" id="message" />
        </FormLabel>
      </p>
      <p>
        <FormBtn type="submit">Let's Chat!</FormBtn>
      </p>
    </ContactForm>
    // <FormWrapper>
    //   <FormWrapperInner name="contact" method="POST" data-netlify="true">
    //     <div>
    //       <FormLabel htmlFor="first-name">
    //         <FontAwesomeIcon icon={faUser} color="white" size="lg" />
    //       </FormLabel>
    //       <FormInput
    //         id="first-name"
    //         type="text"
    //         placeholder="First Name"
    //         name="first name"
    //       />
    //     </div>
    //     <div>
    //       <FormLabel htmlFor="last-name">
    //         <FontAwesomeIcon icon={faUser} color="white" size="lg" />
    //       </FormLabel>
    //       <FormInput
    //         id="last-name"
    //         type="text"
    //         placeholder="Last Name"
    //         name="last name"
    //       />
    //     </div>
    //     <div>
    //       <FormLabel htmlFor="last-name">
    //         <FontAwesomeIcon icon={faEnvelope} color="white" size="lg" />
    //       </FormLabel>
    //       <FormInput
    //         id="last-name"
    //         type="email"
    //         placeholder="Email"
    //         name="email"
    //       />
    //     </div>
    //   </FormWrapperInner>
    //   <FormBtn type="submit">
    //     Let's Chat &nbsp;
    //     <FontAwesomeIcon icon={faPaperPlane} color="black" size="lg" />
    //   </FormBtn>
    // </FormWrapper>
  )
}

export default Form

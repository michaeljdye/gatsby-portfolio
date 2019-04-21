import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faEnvelope,
  faPaperPlane,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import {
  ContactForm,
  FormLabel,
  FormInput,
  FormBtn,
  FlexWrapper,
  TextArea,
} from '../elements'

const Form = () => {
  return (
    <ContactForm
      name="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      action="/thanks"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <FormLabel>
          <FontAwesomeIcon icon={faUser} color="white" size="lg" />
          &nbsp;
          <FormInput required type="text" name="name" />
        </FormLabel>
      </p>
      <p>
        <FormLabel>
          <FontAwesomeIcon icon={faEnvelope} color="white" size="lg" />
          &nbsp;
          <FormInput required type="email" name="email" />
        </FormLabel>
      </p>
      <p>
        <FormLabel>
          <FontAwesomeIcon icon={faComment} color="white" size="lg" />
          &nbsp;
          <TextArea rows="1" required name="message" />
        </FormLabel>
      </p>
      <FlexWrapper justifyContent="center">
        <FormBtn type="submit">
          Send&nbsp;
          <FontAwesomeIcon icon={faPaperPlane} color="black" size="lg" />
        </FormBtn>
      </FlexWrapper>
    </ContactForm>
  )
}

export default Form

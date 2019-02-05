import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faEnvelope,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons'
import {
  ContactForm,
  FormLabel,
  FormInput,
  FormBtn,
} from '../styles/formStyles'

const Form: React.SFC<{}> = () => {
  return (
    <ContactForm
      name="contact"
      method="post"
      action="/"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <FormLabel>
          <FontAwesomeIcon icon={faUser} color="white" size="lg" />
          &nbsp;
          <FormInput type="text" name="name" />
        </FormLabel>
      </p>
      <p>
        <FormLabel>
          <FontAwesomeIcon icon={faEnvelope} color="white" size="lg" />
          &nbsp;
          <FormInput type="email" name="email" />
        </FormLabel>
      </p>
      <p style={{ display: 'flex', justifyContent: 'center' }}>
        <FormBtn type="submit">
          Send&nbsp;
          <FontAwesomeIcon icon={faPaperPlane} color="black" size="lg" />
        </FormBtn>
      </p>
    </ContactForm>
  )
}

export default Form

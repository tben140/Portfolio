import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import Heading from "./Heading.js"

const Container = styled.div`
  flex: 100%;
  order: 2;
  background-color: #ef9323;
  color: #1a1b26;
  padding: 0px 10px;
  margin: 0px 0px 5px 0px;
  @media (min-width: 800px) {
    flex: 1 0px;
    margin: 0px 5px 5px 0px;
  }
`

const FormContainer = styled.div`
  margin: 0 auto;
`

const Form = styled.form`
  padding-left: 0px;
  width: 100%;
`

const Input = styled.input`
  font-size: 1.2em;
  width: 100%;
  background-color: #1a1b26;
  color: #fff;
  padding: 10px 0px;
  border: 0px;
  border-radius: 5px;
  margin: 0px 0px 10px 0px;
  box-sizing: border-box;
  transition: background-color 0.4s, color 0.4s;
  &:focus {
    background-color: white;
    color: black;
  }
`

const TextArea = styled.textarea`
  font-size: 1.2em;
  width: 100%;
  height: 100px;
  background-color: #1a1b26;
  color: #fff;
  padding: 10px 0px;
  border: 0px;
  border-radius: 5px;
  margin: 0px 0px 10px 0px;
  box-sizing: border-box;
  resize: none;
  transition: background-color 0.4s, color 0.4s;
  &:focus {
    background-color: white;
    color: black;
  }
`

const Submit = styled.button`
  type: "submit";
  font-size: 1.2em;
  width: 100%;
  background-color: #3b6ea3;
  color: white;
  margin: 0px 0px 10px 0px;
  border: 0px;
  padding: 14px 20px;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.4s, color 0.4s;
  &:hover {
    background-color: #5cacff;
    color: #000;
  }
`

export default function Contact() {
  return (
    <Container>
      <Heading>Contact</Heading>
      <FormContainer>
        <Form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <Input type="hidden" name="bot-field" />
          <Input type="text" name="name" placeholder="Name..." />
          <Input type="email" name="email" placeholder="Email..." />
          <TextArea name="message" placeholder="Message..."></TextArea>
          <Submit>
            <FontAwesomeIcon icon={faPaperPlane} /> Send
          </Submit>
        </Form>
      </FormContainer>
    </Container>
  )
}

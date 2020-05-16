import React from "react"

import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

import Heading from "./Heading.js"

const Container = styled.div`
  background-color: #ef9323;
  color: #1a1b26;
  /* margin: 0 auto; */
  margin-bottom: 5px;
  margin-right: 5px;
  padding-left: 20px;
  padding-right: 20px;
  order: 2;
  /* width: 509px; */
  flex: 100% 0 340px;
  /* flex: 1; */
  /* flex: 100%; */
  @media (max-width: 1139px) {
    margin-right: 0px;
  }
  @media (max-width: 440px) {
    padding: 0px;
    width: 100%;
  }
`

const FormContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`

const Input = styled.input`
  font-size: 1.2em;
  width: 99%;
  background-color: #1a1b26;
  color: #fff;
  padding: 10px 10px;
  margin-bottom: 10px;
  border: 0px solid #fff;
  border-radius: 5px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: 3px solid #3b6ea3;
  }
  @media (max-width: 440px) {
    /* width: 440px; */
    margin-right: 0px;
    margin-left: 0px;
    width: 100%;
  }
`

const TextArea = styled.textarea`
  font-size: 1.2em;
  width: 99%;
  min-width: 150px;
  height: 100px;
  background-color: #1a1b26;
  color: #fff;
  resize: none;
  padding: 10px 10px;
  margin-bottom: 10px;
  border: 0px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: 3px solid #3b6ea3;
  }
  @media (max-width: 440px) {
    /* width: 440px; */
    margin-right: 0px;
    margin-left: 0px;
    width: 100%;
  }
`

const Submit = styled.button`
  type: "submit";
  width: 99%;
  font-size: 1.2em;
  background-color: #3b6ea3;
  color: white;
  padding: 14px 20px;
  /* margin: 8px 0; */
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
  transition-duration: 0.4s;
  &:hover {
    background-color: #5cacff;
  }
  @media (max-width: 440px) {
    font-size: 1.4em;
    width: 100%;
  }
`

const Form = styled.form`
  padding-left: 0px;
  width: 100%;
`

export default function Contact() {
  return (
    <Container>
      <Heading>Contact</Heading>
      <br />
      <FormContainer>
        <Form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          {/* <FontAwesomeIcon icon={faUser} size="2x" /> */}
          <Input type="text" name="name" placeholder="Name..." />
          {/* <br /> */}
          <Input type="email" name="email" placeholder="Email..." />
          {/* <br /> */}
          <TextArea name="message" placeholder="Message..."></TextArea>
          <Submit>
            <FontAwesomeIcon icon={faPaperPlane} /> Send
          </Submit>
        </Form>
      </FormContainer>
    </Container>
  )
}

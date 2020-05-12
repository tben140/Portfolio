import React from "react"

import styled from "styled-components"

import FiraCode from "../assets/fonts/FiraCode-VariableFont_wght.ttf"

import Heading from "./Heading.js"

const Container = styled.div`
  background-color: #ef9323;
  color: #1a1b26;
  margin: 0 auto;
  margin-bottom: 5px;
  margin-right: 5px;
  padding-left: 20px;
  padding-right: 20px;
  order: 2;
  flex-grow: 1;
  min-width: 400px;
`

const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`

const Label = styled.label`
  @font-face {
    font-family: FiraCode;
    src: url(${FiraCode}) format("truetype");
  }
  font-family: FiraCode;
`

const Input = styled.input`
  font-size: 1.2em;
  width: 99%;
  background-color: #1a1b26;
  color: #fff;
  padding: 10px 10px;
  border: 0px solid #fff;
  border-radius: 5px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: 3px solid #3b6ea3;
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
  border: 0px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: 3px solid #3b6ea3;
  }
`

const Submit = styled.button`
  type: "submit";
  width: 99%;
  background-color: #3b6ea3;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    background-color: #5cacff;
  }
`

export default function Contact() {
  return (
    <Container>
      <Heading>Contact</Heading>
      <br />
      <FormContainer>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <Label>
            Name:
            <br />
            <Input type="text" name="name" placeholder="Name..." />
          </Label>
          <br />
          <Label>
            Email:
            <br />
            <Input type="email" name="email" placeholder="Email..." />
          </Label>
          <br />
          <Label>
            Message:
            <br />
            <TextArea name="message" placeholder="Message..."></TextArea>
          </Label>
          <Submit>Send</Submit>
        </form>
      </FormContainer>
    </Container>
  )
}

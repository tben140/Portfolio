import React from "react"

import styled from "styled-components"

import Heading from "./Heading.js"

const Container = styled.div`
  background-color: #b499c6;
  color: #1a1b26;
  max-width: 340px;
  /* flex: 1 1 340px; */
  margin-bottom: 5px;
  margin-right: 5px;
  padding-left: 20px;
  padding-right: 20px;
  order: 1;
  flex-grow: 1;
  @media (max-width: 440px) {
    max-width: 440px;
    margin-right: 0px;
    margin-left: 0px;
  }
`

const Description = styled.p`
  display: block;
  line-height: 1.2em;
  width: 95%;
  margin: 0 auto;
  padding-left: 10px;
  @media (max-width: 440px) {
    width: 100%;
    padding-left: 0px;
    font-size: 1.2em;
  }
`

export default function AboutMe() {
  return (
    <Container>
      <Heading>About Me</Heading>
      <br />
      <Description>
        I am a recent graduate of the Northcoders Full Stack Coding Bootcamp who
        also has previous experience with providing technical support to
        customers.
        <br />
        <br />
        Much of my work experience has been within ecommerce. I have had a
        longstanding interest in technology and also have academic experience
        within science and mathematics.
        <br />
        <br />
      </Description>
    </Container>
  )
}

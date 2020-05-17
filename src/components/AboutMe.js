import React from "react"
import styled from "styled-components"

import Heading from "./Heading.js"

const Container = styled.div`
  flex: 100%;
  order: 1;
  background-color: #b499c6;
  color: #1a1b26;
  padding: 0px 10px;
  margin: 0px 0px 5px;
  @media (min-width: 1000px) {
    flex: 0 0 275px;
    margin: 0px 5px 5px 0px;
  }
`

const Description = styled.p`
  line-height: 1.2em;
  margin: 0 auto;
`

export default function AboutMe() {
  return (
    <Container>
      <Heading>About Me</Heading>
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

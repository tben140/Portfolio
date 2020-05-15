import React from "react"

import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"

import Heading from "./Heading.js"

const Container = styled.div`
  background-color: #5ba9d7;
  color: #1a1b26;
  width: 200px;
  /* flex: 1 1 340px; */
  /* flex: 1 1 auto; */
  /* margin: 0 auto; */
  margin-bottom: 5px;
  padding-left: 10px;
  padding-right: 20px;
  order: 3;
  @media (max-width: 1189px) {
    width: 340px;
    margin-right: 5px;
  }
  @media (max-width: 440px) {
    width: 440px;
    margin-right: 0px;
  }
`

const Link = styled.a`
  color: #fff;
`

const Github = styled.div`
  text-align: center;
  flex-grow: 1;
`

const Linkedin = styled.div`
  text-align: center;
  flex-grow: 1;
`

const Email = styled.div`
  text-align: center;
  flex-grow: 1;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export default function SocialMedia() {
  return (
    <Container>
      <Heading>Social Media</Heading>
      <br />
      <FlexContainer>
        <Github>
          <FontAwesomeIcon icon={faGithubSquare} size="4x" color="white" />
          <br />
          <Link href="https://github.com/tben140" target="_blank">
            Github
          </Link>
        </Github>
        <br />
        <Linkedin>
          <FontAwesomeIcon icon={faLinkedin} size="4x" color="white" />
          <br />
          <Link
            href="https://www.linkedin.com/in/ben-taylor-571b83101/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </Linkedin>
        <br />
        <Email>
          <FontAwesomeIcon icon={faEnvelopeSquare} size="4x" color="white" />
          <br />
          <Link href="mailto:tben140@gmail.com" target="_top">
            Email
          </Link>
        </Email>
      </FlexContainer>
      <br />
    </Container>
  )
}

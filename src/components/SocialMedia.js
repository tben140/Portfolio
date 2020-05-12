import React from "react"

import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"

import Heading from "./Heading.js"

const Container = styled.div`
  background-color: #5ba9d7;
  color: #1a1b26;
  width: 340px;
  margin: 0 auto;
  margin-bottom: 5px;
  padding-left: 10px;
  padding-right: 20px;
  order: 3;
`

const Link = styled.a`
  color: #000;
`

const Github = styled.div`
  text-align: center;
`

const Linkedin = styled.div`
  text-align: center;
`

const Email = styled.div`
  text-align: center;
`

export default function SocialMedia() {
  return (
    <Container>
      <Heading>Social Media</Heading>
      <br />
      <Github>
        <FontAwesomeIcon icon={faGithubSquare} size="4x" />
        <br />
        <Link href="https://github.com/tben140" target="_blank">
          Github
        </Link>
      </Github>
      <br />
      <Linkedin>
        <FontAwesomeIcon icon={faLinkedin} size="4x" backgroundColor="white" />
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
        <FontAwesomeIcon icon={faEnvelopeSquare} size="4x" />
        <br />
        <Link href="mailto:tben140@gmail.com" target="_top">
          Email
        </Link>
      </Email>
      <br />
    </Container>
  )
}

import React from "react"

import styled from "styled-components"

import { GithubSquare } from "@styled-icons/fa-brands/GithubSquare"
import { Linkedin } from "@styled-icons/fa-brands/Linkedin"
import { EnvelopeSquare } from "@styled-icons/fa-solid/EnvelopeSquare"

import Heading from "./Heading.js"

const Container = styled.div`
  flex: 100%;
  order: 3;
  background-color: #5ba9d7;
  color: #1a1b26;
  padding: 0px 10px;
  margin: 0px 0px 5px 0px;
  @media (min-width: 800px) {
    flex: initial;
    /* width: 300px; */
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 0px 0px 10px 0px;
  @media (min-width: 250px) {
    flex-flow: row wrap;
    justify-content: space-around;
  }
  @media (min-width: 800px) {
    flex-flow: column wrap;
  }
`

const Link = styled.a`
  color: #fff;
  text-align: center;
`

const LinkText = styled.p`
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    color: #eb4d47;
  }
`

const GithubLogo = styled(GithubSquare)`
  display: block;
  color: #fff;
  margin: 0 auto;
  width: 60px;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    color: #eb4d47;
  }
`

const LinkedinLogo = styled(Linkedin)`
  display: block;
  color: #fff;
  margin: 0 auto;
  width: 60px;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    color: #eb4d47;
  }
`

const Email = styled(EnvelopeSquare)`
  display: block;
  color: #fff;
  margin: 0 auto;
  width: 60px;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    color: #eb4d47;
  }
`

export default function SocialMedia() {
  return (
    <Container>
      <Heading>Social Media</Heading>
      <FlexContainer>
        <Link href="https://github.com/tben140" target="_blank">
          <GithubLogo />
          <LinkText>Github</LinkText>
        </Link>
        <Link
          href="https://www.linkedin.com/in/ben-taylor-571b83101/"
          target="_blank"
        >
          <LinkedinLogo />
          <LinkText>LinkedIn</LinkText>
        </Link>
        <Link href="mailto:tben140@gmail.com" target="_top">
          <Email />
          <LinkText>Email</LinkText>
        </Link>
      </FlexContainer>
    </Container>
  )
}

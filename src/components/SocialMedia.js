import React from "react"

import styled from "styled-components"

import Heading from "./Heading.js"

import { GithubSquare } from "@styled-icons/fa-brands/GithubSquare"
import { Linkedin } from "@styled-icons/fa-brands/Linkedin"
import { EnvelopeSquare } from "@styled-icons/fa-solid/EnvelopeSquare"

const Container = styled.div`
  background-color: #5ba9d7;
  color: #1a1b26;
  /* max-width: 440px; */
  flex: 1;
  /* flex: 1 1 340px; */
  /* flex: 1 1 auto; */
  /* margin: 0 auto; */
  margin-bottom: 5px;
  padding-left: 10px;
  padding-right: 20px;
  order: 3;
  /* @media (max-width: 1189px) {
    width: 340px;
    margin-right: 5px;
  } */
  /* @media (max-width: 440px) {
    width: 440px;
    margin-right: 0px;
  } */
  @media (min-width: 468px) {
    /* margin-right: 5px; */
  }
`

const Link = styled.a`
  color: #fff;
  text-align: center;
`

const GithubLogo = styled(GithubSquare)`
  color: white;
  /* text-align: center; */
  margin: 0 auto;
  /* flex-grow: 1; */
  width: 60px;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    color: #eb4d47;
  }
`

const LinkedinLogo = styled(Linkedin)`
  color: white;
  /* text-align: center; */
  margin: 0 auto;
  /* flex-grow: 1; */
  width: 60px;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    color: #eb4d47;
  }
`

const Email = styled(EnvelopeSquare)`
  color: white;
  /* text-align: center; */
  margin: 0 auto;
  /* flex-grow: 1; */
  width: 60px;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    color: #eb4d47;
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 290px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
  @media (min-width: 567px) {
    flex-direction: column;
    justify-content: space-evenly;
    margin-right: 5px;
  }
`

export default function SocialMedia() {
  return (
    <Container>
      <Heading>Social Media</Heading>
      <br />
      <FlexContainer>
        <Link href="https://github.com/tben140" target="_blank">
          <GithubLogo />
          <br />
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/ben-taylor-571b83101/"
          target="_blank"
        >
          <LinkedinLogo />
          <br />
          LinkedIn
        </Link>
        <Link href="mailto:tben140@gmail.com" target="_top">
          <Email />
          <br />
          Email
        </Link>
      </FlexContainer>
      <br />
    </Container>
  )
}

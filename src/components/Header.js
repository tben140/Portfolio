import React from "react"

import styled from "styled-components"

import BackgroundVideo from "../assets/video/headervideo.mp4"

const Headertag = styled.header`
  margin-bottom: 0rem;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  overflow: hidden;
  box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.5);
`

const SiteTitle = styled.h1`
  font-size: 2rem;
  line-height: 1.2em;
  color: white;
  text-shadow: 2px 2px 5px #000;
  margin: 0;
  text-align: center;
  grid-column: 2;
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HeaderVideo = styled.video`
  width: 100%;
  height: 100%;
  grid-column: 1 / span 3;
  grid-row: 1 / span 3;
  object-fit: cover;
  z-index: -1;
  transform: scale(1.04);
  filter: blur(5px);
`

export default function Header() {
  return (
    <Headertag>
      <HeaderVideo autoPlay="true" muted="true" loop="true">
        <source src={BackgroundVideo} type="video/mp4" />
      </HeaderVideo>
      <SiteTitle>
        Ben Taylor
        <br />
        Full Stack Web Developer
      </SiteTitle>
    </Headertag>
  )
}

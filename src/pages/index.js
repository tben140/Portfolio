import React from "react"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import SocialMedia from "../components/SocialMedia"
import Contact from "../components/Contact"

import FiraCode from "../assets/fonts/FiraCode-VariableFont_wght.ttf"

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-track {
    box-shadow: none;
    border-radius: 8px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #b499c6; 
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #3b6ea3;
  }

  body {
    @font-face {
    font-family: FiraCode;
    src: url(${FiraCode}) format("truetype");
    }
    font-family: FiraCode;
    background-color: #1A1B26;
    color: #fff;
    line-height: 1.2em;
    margin: 0 auto;
    overflow: overlay
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* justify-content: flex-start; */
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Layout>
      <SEO title="Home" />
      <Header />
      <FlexContainer>
        <AboutMe />
        <Contact />
        <SocialMedia />
        <Skills />
        <Projects />
      </FlexContainer>
    </Layout>
  </>
)

export default IndexPage

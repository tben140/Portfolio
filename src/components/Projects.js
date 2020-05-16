import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowMaximize, faServer } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import Heading from "./Heading.js"

const Container = styled.div`
  background-color: #3b6ea3;
  color: #1a1b26;
  flex: 1 1 auto;
  order: 5;
  @media (max-width: 440px) {
    margin-right: 0px;
  }
`

const Subheading = styled.h4`
  color: white;
  text-align: center;
`

const Description = styled.p`
  clear: both;
  line-height: 1.2em;
  width: 95%;
  margin: 0 auto;
`

const ImgContainerLaptop = styled.div`
  width: 100%;
  float: left;
  margin-right: 10px;
`

const ImgContainerPhone = styled.div`
  width: 100%;
  order: 2;
  margin-right: 10px;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 500px) {
    flex-direction: row;
  }
`

const FlexItem = styled.div``

const Button = styled.button`
  font-size: 1.2em;
  width: 99%;
  background-color: #eb4d47;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
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
  }
`

const Form = styled.form`
  display: inline-block;
  width: 100%;
`

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      laptopimage: file(relativePath: { eq: "laptop.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      phoneimage: file(relativePath: { eq: "phone.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Heading>Projects</Heading>
      <br />
      <Description>
        <Subheading>
          Northcoders Full Stack Project: Northcoders News
        </Subheading>
        <br />
        <FlexContainer>
          <ImgContainerLaptop>
            <Img fluid={data.laptopimage.childImageSharp.fluid} />
            <br />
          </ImgContainerLaptop>
          <FlexItem>
            Full-stack Reddit style aggregation board. Articles can be voted on
            and discussed, with the user also able to vote on comments. RESTful
            API built with Node.js, Express.js and PostgreSQL. And a frontend
            built with React.js and CSS. Testing carried out with Mocha and
            Chai.
            <br />
            <br />
            <Subheading>Frontend:</Subheading>
            <Form action="https://bt-fe-nc-news.netlify.com" target="_blank">
              <Button>
                <FontAwesomeIcon icon={faWindowMaximize} size="1x" /> Frontend
              </Button>
            </Form>
            <Form
              action="https://github.com/tben140/fe-nc-news"
              target="_blank"
            >
              <Button>
                <FontAwesomeIcon icon={faGithub} size="1x" /> Github
              </Button>
            </Form>
            <br />
            <Subheading>Backend:</Subheading>
            <Form action="https://bt-nc-news.herokuapp.com/api" target="_blank">
              <Button>
                <p>
                  <FontAwesomeIcon icon={faServer} size="1x" /> Backend API
                </p>
              </Button>
            </Form>
            <Form
              action="https://github.com/tben140/be-nc-news"
              target="_blank"
            >
              <Button>
                <p>
                  <FontAwesomeIcon icon={faGithub} size="1x" /> Github
                </p>
              </Button>
            </Form>
            <br />
            <br />
          </FlexItem>
        </FlexContainer>
      </Description>
      <Description>
        <Subheading>Northcoders Final Project: Mobile Running App</Subheading>
        <br />
        <FlexContainer>
          <ImgContainerPhone>
            <Img fluid={data.phoneimage.childImageSharp.fluid} />
            <br />
          </ImgContainerPhone>
          <FlexItem>
            React Native mobile application which creates a running route on a
            map which avoids areas of high air pollution. The Node.js backend is
            hosted on the Google Cloud Platform and the database is hosted on
            MongoDB Atlas. This project was developed as part of a team.
            <br />
            <br />
          </FlexItem>
        </FlexContainer>
      </Description>
      <Description>
        <Subheading>Portfolio</Subheading>
        <br />
        <FlexContainer>
          <ImgContainerLaptop>
            <Img fluid={data.laptopimage.childImageSharp.fluid} />
            <br />
          </ImgContainerLaptop>
          <FlexItem>
            This site was created using Gatsby and Styled Components. Please
            follow the link below for the Github repository.
            <br />
            <br />
            <Form action="https://github.com/tben140/portfolio" target="_blank">
              <Button>
                <p>
                  <FontAwesomeIcon icon={faGithub} size="1x" /> Github
                </p>
              </Button>
            </Form>
          </FlexItem>
        </FlexContainer>
      </Description>
      <br />
    </Container>
  )
}

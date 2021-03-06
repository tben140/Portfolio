import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowMaximize, faServer } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import Heading from "./Heading.js"

const Container = styled.div`
  flex: 100%;
  order: 5;
  background-color: #3b6ea3;
  color: #1a1b26;
  padding: 0px 10px;
`

const Description = styled.p`
  clear: both;
  line-height: 1.2em;
  width: 95%;
  margin: 0 auto;
`

const Subheading = styled.h3`
  color: #fff;
  text-align: center;
  margin: 0px 0px 10px 0px;
`

const ImgContainerLaptop = styled.div`
  width: 100%;
  margin: 0px 0px 10px 0px;
  @media (min-width: 800px) {
    width: 50%;
    margin: 25px 20px 10px 0px;
  }
`

const ImgContainerPhone = styled.div`
  width: 75%;
  margin: 0px auto 10px auto;
  @media (min-width: 800px) {
    order: 2;
    width: 25%;
    margin: 25px 0px 10px 20px;
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  @media (min-width: 800px) {
    flex-flow: row;
  }
`

const FlexItem = styled.div`
  width: 100%;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: column;
  @media (min-width: 400px) {
    flex-flow: row;
  }
`

const Form = styled.form`
  width: 100%;
  @media (min-width: 400px) {
    width: 100%;
    margin: 0 5px;
  }
`

const Button = styled.button`
  font-size: 1.2em;
  width: 100%;
  background-color: #eb4d47;
  color: #fff;
  padding: 14px 20px;
  border: 0px;
  border-radius: 4px;
  margin: 5px 0;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.4s, color 0.4s;
  &:hover {
    background-color: #5cacff;
    color: #000;
  }
`

export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      ncnewslaptopimage: file(relativePath: { eq: "ncnews-laptop.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      portfoliolaptopimage: file(relativePath: { eq: "portfolio-laptop.png" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      appphoneimage: file(relativePath: { eq: "app-phone.png" }) {
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
      <Description>
        <FlexContainer>
          <ImgContainerLaptop>
            <Img fluid={data.ncnewslaptopimage.childImageSharp.fluid} />
          </ImgContainerLaptop>
          <FlexItem>
            <Subheading>
              Northcoders Full Stack Project: Northcoders News
            </Subheading>
            This project is a full stack Reddit style aggregation board. The
            articles can be voted on and comments can be added, with the user
            also able to vote on other users comments and delete their own
            comments. The REST API is built with Node.js, Express and
            PostgreSQL. The frontend is built with React.js and CSS.
            <br />
            <br />
            <Subheading>Frontend:</Subheading>
            <ButtonContainer>
              <Form action="https://bt-fe-nc-news.netlify.com" target="_blank">
                <Button>
                  <FontAwesomeIcon icon={faWindowMaximize} size="1x" /> Frontend
                </Button>
              </Form>
              <Form
                action="https://github.com/tben140/Northcoders-News-Frontend"
                target="_blank"
              >
                <Button>
                  <FontAwesomeIcon icon={faGithub} size="1x" /> Github
                </Button>
              </Form>
            </ButtonContainer>
            <Subheading>Backend:</Subheading>
            <ButtonContainer>
              <Form
                action="https://bt-nc-news.herokuapp.com/api"
                target="_blank"
              >
                <Button>
                  <p>
                    <FontAwesomeIcon icon={faServer} size="1x" /> Backend
                  </p>
                </Button>
              </Form>
              <Form
                action="https://github.com/tben140/Northcoders-News-Backend"
                target="_blank"
              >
                <Button>
                  <p>
                    <FontAwesomeIcon icon={faGithub} size="1x" /> Github
                  </p>
                </Button>
              </Form>
            </ButtonContainer>
            <br />
            <br />
          </FlexItem>
        </FlexContainer>
      </Description>
      <Description>
        <FlexContainer>
          <ImgContainerPhone>
            <Img fluid={data.appphoneimage.childImageSharp.fluid} />
          </ImgContainerPhone>
          <FlexItem>
            <Subheading>
              Northcoders Final Project: Mobile Running App
            </Subheading>
            This React Native mobile application creates a running route on a
            map which avoids areas of high air pollution. The Node.js backend is
            hosted on Horoku, deployed from a Docker container, and the database
            is hosted on MongoDB Atlas. This project was developed as part of a
            team.
            <br />
            <br />
            <Subheading>Frontend:</Subheading>
            <ButtonContainer>
              {/* <Form action="https://bt-fe-nc-news.netlify.com" target="_blank">
                <Button>
                  <FontAwesomeIcon icon={faWindowMaximize} size="1x" /> Frontend
                </Button>
              </Form> */}
              <Form
                action="https://github.com/tben140/Running-App-Frontend"
                target="_blank"
              >
                <Button>
                  <FontAwesomeIcon icon={faGithub} size="1x" /> Github
                </Button>
              </Form>
            </ButtonContainer>
            <Subheading>Backend:</Subheading>
            <ButtonContainer>
              <Form
                action="https://running-app-backend.herokuapp.com/api"
                target="_blank"
              >
                <Button>
                  <p>
                    <FontAwesomeIcon icon={faServer} size="1x" /> Backend
                  </p>
                </Button>
              </Form>
              <Form
                action="https://github.com/tben140/Running-App-Backend"
                target="_blank"
              >
                <Button>
                  <p>
                    <FontAwesomeIcon icon={faGithub} size="1x" /> Github
                  </p>
                </Button>
              </Form>
            </ButtonContainer>
            <br />
            <br />
          </FlexItem>
        </FlexContainer>
      </Description>
      <Description>
        <FlexContainer>
          <ImgContainerLaptop>
            <Img fluid={data.portfoliolaptopimage.childImageSharp.fluid} />
          </ImgContainerLaptop>
          <FlexItem>
            <Subheading>Portfolio</Subheading>
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
    </Container>
  )
}

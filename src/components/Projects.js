import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"

import styled from "styled-components"

import Heading from "./Heading.js"

const Container = styled.div`
  background-color: #3b6ea3;
  color: #1a1b26;
  flex: 1;
  order: 5;
`

const Subheading = styled.h4`
  font-size: 1.2em;
`

const Description = styled.p`
  clear: both;
  line-height: 1.2em;
  width: 95%;
  margin: 0 auto;
`

const Link = styled.a`
  color: #000;
`

const ImgContainerLaptop = styled.div`
  width: 100%;
  float: left;
`

const ImgContainerPhone = styled.div`
  width: 100%;
  float: right;
`

const FlexContainer = styled.div`
  display: flex;
`

const FlexItem = styled.div``

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
        <FlexContainer>
          <ImgContainerLaptop>
            <Img fluid={data.laptopimage.childImageSharp.fluid} />
          </ImgContainerLaptop>
          <FlexItem>
            <br />
            Full-stack Reddit style aggregation board. Articles can be voted on
            and discussed, with the user also able to vote on comments. RESTful
            API built with Node.js, Express.js and PostgreSQL. And a frontend
            built with React.js and CSS. Testing carried out with Mocha and
            Chai.
            <br />
            <br />
            Frontend:{" "}
            <Link href="https://bt-fe-nc-news.netlify.com">
              https://bt-fe-nc-news.netlify.com
            </Link>{" "}
            |{" "}
            <Link href="https://github.com/tben140/fe-nc-news">
              https://github.com/tben140/fe-nc-news
            </Link>
            <br />
            <br />
            Backend:{" "}
            <Link href="https://github.com/tben140/be-nc-news">
              https://github.com/tben140/be-nc-news
            </Link>{" "}
            |{" "}
            <Link href="https://bt-nc-news.herokuapp.com/api">
              https://bt-nc-news.herokuapp.com/api
            </Link>
            <br />
            <br />
          </FlexItem>
        </FlexContainer>
      </Description>
      <Description>
        <Subheading>Northcoders Final Project: Mobile running app</Subheading>
        <br />
        <FlexContainer>
          <ImgContainerPhone>
            <Img fluid={data.phoneimage.childImageSharp.fluid} />
          </ImgContainerPhone>
          <FlexItem>
            React Native mobile application which creates a running route on a
            map which avoids areas of high air pollution. The Node.js backend is
            hosted on the Google Cloud Platform and the database is hosted on
            MongoDB Atlas. This project was developed as part of a team.
          </FlexItem>
        </FlexContainer>
      </Description>
      <Description>
        <Subheading>Portfolio</Subheading>
        <br />
        <FlexContainer>
          <ImgContainerLaptop>
            <Img fluid={data.laptopimage.childImageSharp.fluid} />
          </ImgContainerLaptop>
          <FlexItem>
            This site was created using Gatsby and Styled Components. Please
            follow the link below for the Github repository.
            <br />
            <br />
            <Link href="https://github.com/tben140/portfolio">
              https://github.com/tben140/portfolio
            </Link>
          </FlexItem>
        </FlexContainer>
      </Description>
      <br />
    </Container>
  )
}

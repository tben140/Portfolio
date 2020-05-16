import React from "react"

import styled from "styled-components"

import Heading from "./Heading.js"

const Container = styled.div`
  background-color: #eb4d47;
  color: #1a1b26;
  /* width: 340px; */
  flex: 1 1 340px;
  /* margin-right: 5px; */
  /* padding-left: 10px; */
  /* padding-right: 20px; */
  order: 4;
  @media (min-width: 1145px) {
    flex: 1 1 1145px;
    /* margin-right: 0px; */
    margin-bottom: 5px;
  }
  @media (max-width: 1189px) {
    width: 784px;
    /* margin-right: 0px; */
    margin-bottom: 5px;
  }
  @media (max-width: 440px) {
    width: 440px;
    margin-right: 0px;
    margin-bottom: 5px;
    /* font-size: 1.4em; */
  }
  @media (min-width: 468px) {
    /* flex: 1 1 1145px; */
    margin-left: 5px;
    /* margin-bottom: 5px; */
  }
`

const Subheading = styled.h4`
  color: white;
  width: 95%;
  margin: 0 auto;
  margin: 5px;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 440px) {
    flex-direction: column;
    padding-left: 20px;
  }
  @media (min-width: 300px) {
    flex-direction: row;
    justify-content: center;
  }
`
const FlexItem = styled.div`
  @media (min-width: 300px) {
    min-width: 130px;
  }
`

const List = styled.ul`
  margin: 5px;
  line-height: 1.2em;
`

export default function Skills() {
  return (
    <Container>
      <Heading>Skills</Heading>
      <br />
      <FlexContainer>
        <FlexItem>
          <Subheading>Frontend</Subheading>
          <List>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Gatsby</li>
          </List>
          <br />
        </FlexItem>
        <FlexItem>
          <Subheading>Backend</Subheading>
          <List>
            <li>Node.js</li>
            <li>Express</li>
            <li>Axios</li>
            <li>Knex.js</li>
          </List>
          <br />
        </FlexItem>
        <FlexItem>
          <Subheading>Mobile</Subheading>
          <List>
            <li>React Native</li>
          </List>
          <br />
        </FlexItem>
        <FlexItem>
          <Subheading>Testing</Subheading>
          <List>
            <li>Jest</li>
            <li>Mocha</li>
            <li>Chai</li>
          </List>
          <br />
        </FlexItem>
        <FlexItem>
          <Subheading>Databases</Subheading>
          <List>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </List>
          <br />
        </FlexItem>
        <FlexItem>
          <Subheading>CMS/eCommerce</Subheading>
          <List>
            <li>Wordpress</li>
            <li>Woocommerce</li>
            <li>Magento</li>
            <li>Shopify</li>
            <li>Amazon</li>
            <li>eBay</li>
            <li>Etsy</li>
          </List>
        </FlexItem>
      </FlexContainer>
    </Container>
  )
}

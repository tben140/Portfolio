import React from "react"

import styled from "styled-components"

import Heading from "./Heading.js"

const Container = styled.div`
  background-color: #eb4d47;
  color: #1a1b26;
  max-width: 340px;
  margin-right: 5px;
  padding-left: 10px;
  padding-right: 20px;
  order: 4;
`

const Subheading = styled.h4`
  font-style: italic;
  width: 95%;
  margin: 0 auto;
  margin: 5px;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const FlexItem = styled.div``

const List = styled.ul`
  margin: 10px;
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
        </FlexItem>
        <FlexItem>
          <Subheading>Testing</Subheading>
          <List>
            <li>Jest</li>
            <li>Mocha</li>
            <li>Chai</li>
          </List>
        </FlexItem>
        <FlexItem>
          <Subheading>Databases</Subheading>
          <List>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </List>
        </FlexItem>
        <FlexItem>
          <Subheading>CMS/eCommerce</Subheading>
          <List>
            <li>Wordpress</li>
            <li>Woocommerce</li>
            <li>Magento</li>
            <li>Shopify</li>
            <li>Amazon Seller Central</li>
            <li>eBay Seller Hub</li>
            <li>Etsy</li>
          </List>
        </FlexItem>
      </FlexContainer>
      <br />
    </Container>
  )
}

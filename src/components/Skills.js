import React from "react"

import styled from "styled-components"

import Heading from "./Heading.js"

const Container = styled.div`
  order: 4;
  background-color: #eb4d47;
  color: #1a1b26;
  padding: 0px 10px;
  margin: 0px 0px 5px 0px;
`

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const FlexItem = styled.div`
  flex: 135px 0;
`

const Subheading = styled.h3`
  color: #fff;
`
const ListContainer = styled.ul`
  margin: 0px 0px 10px 0px;
  line-height: 1.2em;
`

const ListItem = styled.li``

export default function Skills() {
  return (
    <Container>
      <Heading>Skills</Heading>
      <FlexContainer>
        <FlexItem>
          <Subheading>Frontend</Subheading>
          <ListContainer>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>React.js</ListItem>
            <ListItem>Gatsby</ListItem>
          </ListContainer>
        </FlexItem>
        <FlexItem>
          <Subheading>Backend</Subheading>
          <ListContainer>
            <ListItem>Node.js</ListItem>
            <ListItem>Express</ListItem>
            <ListItem>Axios</ListItem>
            <ListItem>Knex.js</ListItem>
          </ListContainer>
        </FlexItem>
        <FlexItem>
          <Subheading>Mobile</Subheading>
          <ListContainer>
            <ListItem>React Native</ListItem>
          </ListContainer>
        </FlexItem>
        <FlexItem>
          <Subheading>Testing</Subheading>
          <ListContainer>
            <ListItem>Jest</ListItem>
            <ListItem>Mocha</ListItem>
            <ListItem>Chai</ListItem>
          </ListContainer>
        </FlexItem>
        <FlexItem>
          <Subheading>Databases</Subheading>
          <ListContainer>
            <ListItem>PostgreSQL</ListItem>
            <ListItem>MongoDB</ListItem>
          </ListContainer>
        </FlexItem>
        <FlexItem>
          <Subheading>CMS/eCommerce</Subheading>
          <ListContainer>
            <ListItem>Wordpress</ListItem>
            <ListItem>Woocommerce</ListItem>
            <ListItem>Magento</ListItem>
            <ListItem>Shopify</ListItem>
            <ListItem>Amazon</ListItem>
            <ListItem>eBay</ListItem>
            <ListItem>Etsy</ListItem>
          </ListContainer>
        </FlexItem>
      </FlexContainer>
    </Container>
  )
}

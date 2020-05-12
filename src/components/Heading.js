import styled from "styled-components"

import FiraCode from "../assets/fonts/FiraCode-VariableFont_wght.ttf"

const Heading = styled.h3`
  @font-face {
    font-family: FiraCode;
    src: url(${FiraCode}) format("truetype");
  }
  font-family: FiraCode;
  font-size: 1.6em;
  display: block;
  margin: 0 auto;
  padding-top: 10px;
  text-align: center;
`

export default Heading

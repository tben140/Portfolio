import styled from "styled-components"

import FiraCode from "../assets/fonts/FiraCode-VariableFont_wght.ttf"

const Heading = styled.h2`
  @font-face {
    font-family: FiraCode;
    src: url(${FiraCode}) format("truetype");
  }
  font-family: FiraCode;
  font-size: 1.6em;
  line-height: 1.1em;
  display: block;
  margin: 0 auto 10px auto;
  padding-top: 10px;
  text-align: center;
`

export default Heading

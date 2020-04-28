import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Button from "../Button/Button"
import Mask from "../Mask/Mask"

const StyledWrapper = styled.div`
  height: 450px;
  width: 100%;
  background-color: #f6b800;
  background-color: #ffaa00;
  background-color: #ffaa00;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23f6b800'/%3E%3Cstop offset='1' stop-color='%23ffaa00'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23f6e000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23f6e000' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.5'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 580px;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 25px;
  }
`

const ContactWrapper = ({ children }) => (
  <StyledWrapper>
    <h1>Masz pytania?</h1>
    <Button dark2="1" as={Link} to="/kontakt">
      Napisz do nas
    </Button>
    <Mask color="grey100" />
    <Mask color="dark2" bottom />
  </StyledWrapper>
)
export default ContactWrapper

import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"

import Hamburger from "../Hamburger/Hamburger"
import Logo from "../../assets/logo_b.svg"

const StyledWrapper = styled.div`
  background: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`

const StyledInnerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const StyledLink = styled(Link)`
  width: 120px;
`

const Logotype = styled.img`
  height: 100%;
  margin: 0;
  z-index: 10;
`

const Header = ({ siteTitle }) => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <StyledLink to="/">
        <Logotype src={Logo} alt="URO-MK logotyp" />
      </StyledLink>
      <Hamburger />
    </StyledInnerWrapper>
  </StyledWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
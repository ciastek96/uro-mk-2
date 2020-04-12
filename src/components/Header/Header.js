import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../../assets/logo_b.svg"

const Logotype = styled.img`
  max-width: 150px;
  margin: 0;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `none`,
      borderBottom: "1px solid rgba(255,255,255,0.3)",
      position: `fixed`,
      top: 0,
      left: 0,
      width: `100%`,
      zIndex: 100,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Logotype src={Logo} alt="URO-MK logotyp" />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

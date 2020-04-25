/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../theme/theme"

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import "./layout.css"

const GlogalStyle = createGlobalStyle`
    body {
      padding: 0;
      margin: 0;
      color: ${({ theme }) => theme.dark};
      background-color: ${({ theme }) => theme.white};
      font-family: 'Montserrat', sans-serif;
      font-size: 1.6rem;
    }

    html {
      font-size: 62.5%; /* 1rem = 10px; */
    }

    p,
    blockquote {
      line-height: 1.75;
      text-align: justify;
      font-size: ${({ theme }) => theme.fontSize.s};
      color: ${({ theme }) => theme.dark2};
      word-wrap: break-word;
  }
  `

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlogalStyle />
        <Header />
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <main>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

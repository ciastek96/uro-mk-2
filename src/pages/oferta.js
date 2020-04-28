import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Layout from "../layout/layout"
import Hero from "../components/Hero/Hero"
import ContactWrapper from "../components/ContactWrapper/ContactWrapper"
import ContentContainer from "../components/ContentContainter/ContentContainer"
import SEO from "../components/SEO/SEO"

import Logo from "../assets/favicon.svg"

const StyledWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.md};
  margin: 0 auto;
  display: grid;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const Oferta = () => (
  <Layout>
    <SEO title="Oferta" />
    <Hero></Hero>

    <ContentContainer>
      <h1>Oferta</h1>
      <StyledWrapper>
        <img src={Logo} alt="logo" />
        <div>
          <h1>Witamy na naszej stronie</h1>
          <p>
            Sed dolore aliquyam invidunt tempor et. Lorem sed kasd sea dolor sea
            diam. Sed duo est aliquyam eos. Sit et rebum et no vero, ipsum
            dolore et sadipscing justo sit aliquyam, sadipscing ipsum dolores
            ipsum ea erat ipsum stet invidunt, dolor est amet est duo et dolor
            rebum, eirmod lorem takimata stet sit, et diam sadipscing stet
            dolor.
          </p>
          <p>
            At lorem accusam voluptua invidunt elitr diam voluptua dolor eirmod.
            Accusam ipsum justo kasd eos accusam nonumy aliquyam duo. Justo at
            duo dolor lorem stet et. Labore est rebum duo clita sit consetetur
            sed dolor. Invidunt et erat diam sed, ipsum clita sanctus labore sed
            sadipscing dolor aliquyam gubergren. Lorem diam et et consetetur
            sanctus magna.
          </p>
        </div>
      </StyledWrapper>
    </ContentContainer>
    <ContactWrapper />
  </Layout>
)

Oferta.propTypes = {
  siteTitle: PropTypes.string,
}

Oferta.defaultProps = {
  siteTitle: ``,
}

export default Oferta

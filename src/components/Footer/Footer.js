import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import LogoImg from "../../assets/logo_b.svg"
// import Photo2 from "../../images/2.jpg"
// import Photo3 from "../../images/3.jpg"

// const posts = [
//   {
//     id: 2,
//     title: "Dom w Smolnicy",
//     slug: "dom-w-smolnicy",
//     author: "Arek",
//     date: "17-10-2019",
//     description: "Realizacja domu jednorodzinnego w Smolnicy",
//     content:
//       "No ipsum ipsum takimata et labore erat justo. Dolor ea diam et sit lorem dolore. Vero sit sea sed invidunt vero. Nonumy sed et dolores rebum et elitr stet. Eirmod elitr labore ipsum takimata, nonumy no sea lorem justo elitr nonumy sea. Labore ut kasd rebum vero ea. Tempor nonumy dolore vero eos amet sit, sit ut eos dolores accusam ut, diam voluptua stet dolor sit, et voluptua dolor ipsum accusam eirmod duo elitr ut amet, dolor stet voluptua rebum tempor dolores et nonumy stet sanctus. Tempor dolor justo duo voluptua sea dolore sit. Sed dolore lorem dolore ipsum dolore invidunt. Takimata magna takimata clita vero sea et. Rebum gubergren invidunt et accusam eos lorem sit amet, amet tempor ipsum eos rebum, ut ipsum sea invidunt dolores vero ipsum, amet labore tempor amet nonumy sanctus takimata kasd, sit accusam et labore erat eirmod takimata. Et sanctus magna ea diam justo.",
//     image: Photo2,
//   },
//   {
//     id: 3,
//     title: "Renowacja fasady w Gliwicach",
//     slug: "renowacja-fasady-w-gliwicach",
//     author: "Arek",
//     date: "29-03-2019",
//     description:
//       "Renowacja fasady przy ul. Jagiellońskiej w Gliwicach, we współpracy z firmą JANMIR",
//     content:
//       "Nonumy invidunt erat stet amet ea est ea dolor sea. Diam rebum sea ea dolor consetetur et ea at dolor, sit sed labore voluptua sanctus, sed justo diam at sanctus lorem sanctus diam kasd, gubergren gubergren eos et gubergren kasd ipsum at et. Sed et dolores lorem et consetetur et erat dolor sed. Dolor dolores et sadipscing dolores elitr amet. Et sit diam gubergren ea sanctus, diam sit diam sit stet elitr magna. Sed duo et eirmod at, dolor et gubergren at amet gubergren justo et et amet. Elitr gubergren accusam gubergren elitr ea justo aliquyam diam, sadipscing consetetur accusam diam aliquyam diam et ea sea gubergren. Sit sanctus sit justo magna sed et dolor et sed. Ut sea ea ipsum clita ut et sed. Invidunt invidunt voluptua magna sit eirmod elitr accusam tempor at. Et dolore tempor ut ut, dolor et eos sed et diam. Et magna lorem aliquyam aliquyam sed diam sea, dolor dolor duo dolores et consetetur accusam sed, sit sit dolor gubergren rebum voluptua kasd ipsum lorem gubergren, et ipsum amet aliquyam dolores et at dolore, no et tempor et nonumy amet ut dolor accusam, eos elitr sea diam accusam tempor. Consetetur sit duo at ipsum sit invidunt, dolor nonumy erat invidunt takimata aliquyam dolor et ea lorem, ipsum amet amet kasd est labore diam no amet diam. Nonumy duo lorem clita sadipscing sed dolor amet, lorem aliquyam erat ut sit sadipscing dolor nonumy stet eos. Tempor eos erat amet amet duo, gubergren clita lorem takimata sed est ea. Amet eos amet ipsum tempor diam. Sit amet eos sed aliquyam diam at magna magna. Elitr dolor sit stet at vero dolore accusam, dolor eos invidunt lorem justo sanctus diam ea gubergren accusam. Sea eos dolores consetetur erat eos lorem rebum rebum, at kasd diam stet et takimata sed sit, magna vero amet consetetur voluptua ea est dolor takimata dolores, amet ipsum dolores duo voluptua amet. Et eos elitr dolor sea. Diam sea elitr gubergren sea sed duo ipsum. Et sit eos takimata ipsum ipsum diam. Invidunt dolore no magna ea ut. Elitr sanctus voluptua sit eos sit at dolore et diam, dolor sanctus no rebum nonumy, et ipsum sadipscing dolor amet clita eirmod erat et. Et voluptua takimata sanctus diam consetetur, voluptua ipsum vero stet sanctus elitr kasd tempor tempor. Takimata amet et duo eirmod ut erat. Labore nonumy rebum duo erat diam. Aliquyam lorem tempor justo clita. Consetetur sea et et nonumy et voluptua kasd, sadipscing takimata ipsum elitr sed et sit dolor magna et, ea lorem no consetetur ea gubergren amet ipsum consetetur, rebum accusam no et sed, diam clita rebum et clita at aliquyam tempor stet, takimata eirmod et kasd takimata aliquyam consetetur..",
//     image: Photo3,
//   },
// ]

const StyledWrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.dark2};
  color: ${({ theme }) => theme.white};
  position: relative;
`

const StyledInnerWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr;
  /* grid-gap: 25px; */
  margin: 0 auto;
  padding: 20px 0;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }
`

const StyledItem = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;

  img {
    max-height: 60px;
    margin: 0;
  }

  h2 {
    color: ${({ theme }) => theme.yellow};
    font-weight: 500;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`

const StyledList = styled.ul`
  margin: 0 0 0 10px;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StyledListItem = styled.li`
  list-style: none;

  a {
    color: ${({ theme }) => theme.grey200};
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.15s ease-in-out;

    &:hover {
      color: white;
    }
  }
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.white};
  letter-spacing: 1.1px;
  color: rgb(255, 255, 255);
  text-align: left;
  font-size: 1.2rem;
`

const Footer = () => (
  <StyledWrapper>
    {/* <Mask color="yellow" /> */}
    <StyledInnerWrapper>
      <StyledItem>
        <img src={LogoImg} alt="URO-MK logotyp" />
        {/*©{new Date().getFullYear()}, */}
      </StyledItem>
      <StyledItem>
        <h2>Aktualności</h2>
      </StyledItem>
      <StyledItem>
        <h2>Strony</h2>
        <StyledList>
          <StyledListItem>
            <Link to="/oferta">Oferta</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/aktualnosci">Aktualności</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/realizacje">Realizacje</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
          </StyledListItem>
          <StyledListItem>
            <Link to="/kontakt">Kontakt</Link>
          </StyledListItem>
        </StyledList>
      </StyledItem>
      <StyledItem>
        <h2>Kontakt</h2>
        <Paragraph>uro-mk@o2.pl</Paragraph>
        <Paragraph>+48 505 146 377</Paragraph>
        <Paragraph>+48 500 158 987</Paragraph>
        <Paragraph>f</Paragraph>
      </StyledItem>
    </StyledInnerWrapper>
  </StyledWrapper>
)

export default Footer

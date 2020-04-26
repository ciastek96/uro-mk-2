import React from "react"
import styled from "styled-components"

import Article from "../Article/Article"

import Photo1 from "../../images/1.jpg"
import Photo2 from "../../images/2.jpg"
import Photo3 from "../../images/3.jpg"

const posts = [
  {
    id: 0,
    title: "Realizacja stropu w Zacharzowicach",
    slug: "dom-w-zacharzowicach",
    author: "Arek",
    date: "20-04-2020",
    description:
      "Prace nad stropem dla projektu dom w Zefirantach w Zacharzowicach",
    content:
      "Ut diam lorem diam consetetur accusam gubergren dolor. Sit eirmod justo et nonumy, magna sea no lorem eirmod, sed at justo eirmod dolores, invidunt amet diam takimata dolor dolores aliquyam gubergren elitr takimata. Gubergren amet consetetur clita est eirmod accusam, sed kasd gubergren et vero diam eirmod. Stet diam takimata erat magna ea vero. Ea dolor takimata clita accusam invidunt sit sit, sanctus lorem kasd et tempor sed. Lorem sed eos dolor eirmod, et diam gubergren et nonumy vero, et justo voluptua rebum sadipscing, gubergren ipsum dolor takimata diam dolor elitr et, at clita takimata invidunt accusam eirmod lorem aliquyam magna, gubergren takimata takimata dolore clita sed, eirmod kasd lorem ipsum ipsum amet et amet at diam, sit labore et duo ipsum dolores erat stet at ipsum. Gubergren ut consetetur diam eos lorem justo no no et, dolor sea erat nonumy ipsum sea sanctus dolores nonumy. Stet sed eos labore elitr voluptua no, magna lorem invidunt et sed sed stet est diam erat. Rebum sit est diam et clita at. Vero sit et invidunt dolor. Et sanctus kasd justo elitr clita et rebum magna lorem, sit aliquyam sadipscing tempor duo stet aliquyam et. At vero et amet kasd et aliquyam..",
    image: Photo1,
  },
  {
    id: 2,
    title: "Dom w Smolnicy",
    slug: "dom-w-smolnicy",
    author: "Arek",
    date: "17-10-2019",
    description: "Realizacja domu jednorodzinnego w Smolnicy",
    content:
      "No ipsum ipsum takimata et labore erat justo. Dolor ea diam et sit lorem dolore. Vero sit sea sed invidunt vero. Nonumy sed et dolores rebum et elitr stet. Eirmod elitr labore ipsum takimata, nonumy no sea lorem justo elitr nonumy sea. Labore ut kasd rebum vero ea. Tempor nonumy dolore vero eos amet sit, sit ut eos dolores accusam ut, diam voluptua stet dolor sit, et voluptua dolor ipsum accusam eirmod duo elitr ut amet, dolor stet voluptua rebum tempor dolores et nonumy stet sanctus. Tempor dolor justo duo voluptua sea dolore sit. Sed dolore lorem dolore ipsum dolore invidunt. Takimata magna takimata clita vero sea et. Rebum gubergren invidunt et accusam eos lorem sit amet, amet tempor ipsum eos rebum, ut ipsum sea invidunt dolores vero ipsum, amet labore tempor amet nonumy sanctus takimata kasd, sit accusam et labore erat eirmod takimata. Et sanctus magna ea diam justo.",
    image: Photo2,
  },
  {
    id: 3,
    title: "Renowacja fasady w Gliwicach",
    slug: "renowacja-fasady-w-gliwicach",
    author: "Arek",
    date: "29-03-2019",
    description:
      "Renowacja fasady przy ul. Jagiellońskiej w Gliwicach, we współpracy z firmą JANMIR",
    content:
      "Nonumy invidunt erat stet amet ea est ea dolor sea. Diam rebum sea ea dolor consetetur et ea at dolor, sit sed labore voluptua sanctus, sed justo diam at sanctus lorem sanctus diam kasd, gubergren gubergren eos et gubergren kasd ipsum at et. Sed et dolores lorem et consetetur et erat dolor sed. Dolor dolores et sadipscing dolores elitr amet. Et sit diam gubergren ea sanctus, diam sit diam sit stet elitr magna. Sed duo et eirmod at, dolor et gubergren at amet gubergren justo et et amet. Elitr gubergren accusam gubergren elitr ea justo aliquyam diam, sadipscing consetetur accusam diam aliquyam diam et ea sea gubergren. Sit sanctus sit justo magna sed et dolor et sed. Ut sea ea ipsum clita ut et sed. Invidunt invidunt voluptua magna sit eirmod elitr accusam tempor at. Et dolore tempor ut ut, dolor et eos sed et diam. Et magna lorem aliquyam aliquyam sed diam sea, dolor dolor duo dolores et consetetur accusam sed, sit sit dolor gubergren rebum voluptua kasd ipsum lorem gubergren, et ipsum amet aliquyam dolores et at dolore, no et tempor et nonumy amet ut dolor accusam, eos elitr sea diam accusam tempor. Consetetur sit duo at ipsum sit invidunt, dolor nonumy erat invidunt takimata aliquyam dolor et ea lorem, ipsum amet amet kasd est labore diam no amet diam. Nonumy duo lorem clita sadipscing sed dolor amet, lorem aliquyam erat ut sit sadipscing dolor nonumy stet eos. Tempor eos erat amet amet duo, gubergren clita lorem takimata sed est ea. Amet eos amet ipsum tempor diam. Sit amet eos sed aliquyam diam at magna magna. Elitr dolor sit stet at vero dolore accusam, dolor eos invidunt lorem justo sanctus diam ea gubergren accusam. Sea eos dolores consetetur erat eos lorem rebum rebum, at kasd diam stet et takimata sed sit, magna vero amet consetetur voluptua ea est dolor takimata dolores, amet ipsum dolores duo voluptua amet. Et eos elitr dolor sea. Diam sea elitr gubergren sea sed duo ipsum. Et sit eos takimata ipsum ipsum diam. Invidunt dolore no magna ea ut. Elitr sanctus voluptua sit eos sit at dolore et diam, dolor sanctus no rebum nonumy, et ipsum sadipscing dolor amet clita eirmod erat et. Et voluptua takimata sanctus diam consetetur, voluptua ipsum vero stet sanctus elitr kasd tempor tempor. Takimata amet et duo eirmod ut erat. Labore nonumy rebum duo erat diam. Aliquyam lorem tempor justo clita. Consetetur sea et et nonumy et voluptua kasd, sadipscing takimata ipsum elitr sed et sit dolor magna et, ea lorem no consetetur ea gubergren amet ipsum consetetur, rebum accusam no et sed, diam clita rebum et clita at aliquyam tempor stet, takimata eirmod et kasd takimata aliquyam consetetur..",
    image: Photo3,
  },
]

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 580px;
  background-color: ${({ theme }) => theme.grey100};
  box-shadow: 0 1px 30px -10px hsla(0, 0%, 0%, 0.05);
  margin: 0 auto;
  padding: 35px 20px;
  text-align: center;
  /* border: 1px solid ${({ theme }) => theme.grey400}; */

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
  }
`
const StyledInnerWrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.lg};
  margin: 35px auto;
  display: flex;
  flex-direction: column;

  & > div {
    margin-top: 25px;
  }

  & > div :first-child {
    margin-top: 0;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 35px;

    & > div {
      margin-top: 0;
    }
  }
`

const MoreArticles = () => (
  <StyledWrapper>
    <h1>Zobacz więcej postów</h1>
    <StyledInnerWrapper>
      {posts.map(post => (
        <Article
          type="small"
          key={post.id}
          image={post.image}
          title={post.title}
          date={post.date}
          author={post.author}
          description={post.description}
          content={post.content}
        />
      ))}
    </StyledInnerWrapper>
  </StyledWrapper>
)

export default MoreArticles

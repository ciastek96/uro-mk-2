import React from "react"

import ContactWrapper from "../components/ContactWrapper/ContactWrapper"
import MoreArticles from "../components/MoreArticles/MoreArticles"
import Layout from "../layout/layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/SEO/SEO"

import Video from "../assets/video.mp4"

const IndexPage = () => (
  <Layout>
    <SEO title="URO-MK - usługi remontowo ociepleniowe" />
    <Hero>
      <video loop muted autoPlay preload="auto">
        <source src={Video} type="video/mp4" />
      </video>
    </Hero>
    <MoreArticles title="Aktualności" />
    <ContactWrapper />
  </Layout>
)

export default IndexPage

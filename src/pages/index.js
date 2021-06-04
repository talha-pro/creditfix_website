import React from "react"
import AboutUs from "../components/AboutUs"
import ChooseUS from "../components/ChooseUs"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import Process from "../components/Process"
import Wrapper from "../components/Wrapper"
import ApplyNow from "../components/ApplyNow"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Wrapper>
      <Helmet>
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta name="keywords" content={data.site.siteMetadata.keywords} />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={data.site.siteMetadata.description}
        />
        <meta property="og:image" content="" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={data.site.siteMetadata.url} />
        <link rel="canonical" href={data.site.siteMetadata.url} />
      </Helmet>
      <Hero
        headlineOne="Accessible"
        headlineTwo="Credit"
        headlineThree="For Everyone"
        buttonLabel="Download App"
      />
      <ChooseUS />
      <AboutUs />
      <Process />
      <ApplyNow />
      <Partners />
      <ContactUs contactStatement="" />
      <Footer />
    </Wrapper>
  )
}

export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        description
        keywords
        title
        url
      }
    }
  }
`

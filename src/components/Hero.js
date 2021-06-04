import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Button from "./Button"
import waveone from "../images/wave-one.svg"
import wavetwo from "../images/wave-two.svg"
import wavethree from "../images/wave-three.svg"
import background_video from "../images/header_video.mp4"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Link as GatsbyLink } from "gatsby"

const Hero = props => {
  const { headlineOne, headlineTwo, headlineThree, buttonLabel } = props

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "header_mobile.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 430, maxHeight: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logo: file(relativePath: { eq: "logo-white.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const mobile = data.desktop.childImageSharp.fluid
  const logo = data.logo.childImageSharp.fluid

  return (
    <section className="header">
      <Image src={waveone} className="header__wave-one" />
      <Image src={wavetwo} className="header__wave-two" />
      <Image src={wavethree} className="header__wave-three" />
      <div className="header__video-overlay"></div>
      <video className="header__header-video" autoPlay muted loop>
        <source src={background_video} type="video/mp4"></source>
      </video>
      <Container>
        <Row>
          <Col className="header__col-left" lg={6} xl={8}>
            <GatsbyLink to="/" smooth={true}>
              <Img className="header__logo" fluid={logo} />
            </GatsbyLink>
            <div className="header__title-wrapper">
              <h1 className="header__title">{headlineOne}</h1>
              <h1 className="header__title">{headlineTwo}</h1>
              <div className="text-typing">
                <p>{headlineThree}</p>
              </div>
            </div>

            <div className="header__business-button-wrapper">
              <a
                href="https://play.google.com/store/apps/details?id=pk.creditfixv2.app"
                className="footer__link"
              >
                <Button label={buttonLabel} />
              </a>
              &nbsp;&nbsp;&nbsp;
              <div className="header__business-button">
                <GatsbyLink to="/business">
                  <Button label="Business" />
                </GatsbyLink>
              </div>
            </div>
          </Col>
          <Col className="header__col-right" lg={6} xl={4}>
            <Img fluid={mobile} className="header__mobile" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero

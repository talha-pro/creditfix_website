import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Line from "./Line"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const AboutUs = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "laptop.PNG" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 612, maxHeight: 340) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const laptop = data.desktop.childImageSharp.fluid
  return (
    <section id="about" className="about">
      <Container>
        <Row>
          <Col className="about__col-left" md={12} lg={6} xl={6}>
            <Img fluid={laptop} className="about__image" />
          </Col>
          <Col className="about__col-right" md={12} lg={6} xl={6}>
            <Line type="large" />
            <h1 className="about__heading">About CreditFix</h1>
            <p className="about__text">
              Creditfix is a licensed lending platform that does data driven
              decision making and assessment for individual and small businesses
              with speed, with the ability to entertain underserved and unserved
              segments get a loan conveniently and quickly. Creditfix enables
              users to get a loan when others would not serve, and at the best
              rates for micro entrepreneurs, small businesses, private & public
              sector partners, and unserved & underserved “missing middle”
              consumers to help them get credit for specific use cases
              especially assets, for themselves and networks.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs

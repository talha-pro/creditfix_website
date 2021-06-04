import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Line from "./Line"
import business from "../images/business.svg"

const AboutBusiness = () => {
  return (
    <section id="about" className="about">
      <Container>
        <Row>
          <Col className="about__col-left" md={12} lg={6} xl={6}>
            <Image src={business} className="about__image" />
          </Col>
          <Col className="about__col-right" md={12} lg={6} xl={6}>
            <Line type="large" />
            <h1 className="about__heading">CreditFix for Businesses</h1>
            <p className="about__text">
              CreditFix is a digital lending platform that provides easy access
              to credit for individual and small businesses using a mobile-led
              approach. CreditFix promises fair credit, the fastest turn-around
              time and the best rates in the market under a sharia-compliant
              financing model.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutBusiness

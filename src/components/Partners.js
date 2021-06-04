import React from "react"
import PartnerCard from "../components/PartnerCard"
import { Container, Row, Col, Image } from "react-bootstrap"
import cheetay from "../images/cheetay.png"
import foodpanda from "../images/foodpanda.png"
import karandaaz from "../images/karandaaz.png"
import dfslab from "../images/dfs.png"
import meezan from "../images/meezan.png"
import pda from "../images/pda.jpeg"
import foree from "../images/foree.png"
import iprocure from "../images/iprocure.png"
import atlashonda from "../images/atlashonda.png"
import mnp from "../images/mnp.png"
import Line from "./Line"
import AliceCarousel from "react-alice-carousel"
import backgroundPattern from "../images/backgroundPattern.svg"

const Partners = () => {
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 2 },
    1200: { items: 3 },
  }

  const items = [
    <PartnerCard logo={cheetay} />,
    <PartnerCard logo={foodpanda} />,
    <PartnerCard logo={dfslab} />,
    <PartnerCard logo={karandaaz} />,
    <PartnerCard logo={meezan} />,
    <PartnerCard logo={pda} />,
    <PartnerCard logo={foree} />,
    <PartnerCard logo={iprocure} />,
    <PartnerCard logo={atlashonda} />,
    <PartnerCard logo={mnp} />,
  ]

  return (
    <section className="partners">
      <Image fluid={true} className="background" src={backgroundPattern} />
      <Container>
        <Row>
          <Col xl={12} className="partners__col-upper">
            <Line type="large" />
            <h1 className="partners__heading">Our Partners</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xl={12} className="partners__col-lower">
            <AliceCarousel
              infinite={true}
              autoPlay={true}
              items={items}
              responsive={responsive}
              animationDuration={2000}
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Partners

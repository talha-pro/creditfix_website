import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Line from "../components/Line"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import ProcessCard from "../components/ProcessCard"
import download from "../images/11.png"
import choose from "../images/22.png"
import lease from "../images/33.png"
import upload from "../images/44.png"
import pay from "../images/55.png"
import playIcon from "../images/play.png"

const Process = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "header_mobile.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 332, maxHeight: 664) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const mobile = data.desktop.childImageSharp.fluid

  return (
    <section id="process" className="process">
      <Container>
        <Row>
          <Col className="process__col-left" md={12} lg={7} xl={7}>
            <Line type="large" />
            <h1 className="process__heading">Process</h1>
            <div className="process__text">
              &#10140; Download our application and sign up
            </div>
            <div className="process__text">
              &#10140; Choose your desired product
            </div>
            <div className="process__text">
              &#10140; Generate your customized lease plan
            </div>
            <div className="process__text">
              &#10140; Upload documents for Identity Verification
            </div>
            <div className="process__text">
              &#10140; Pay at your nearest Easy Paisa Branch
            </div>
            <br />
            <a
              href="https://play.google.com/store/apps/details?id=pk.creditfixv2.app"
              className="footer__link"
            >
              <Image
                fluid={true}
                src={playIcon}
                className="footer__google-play"
              />
            </a>
          </Col>
          <Col className="process__col-right" md={12} lg={5} xl={5}>
            <div className="process__image-video-wrapper">
              <Img fluid={mobile} className="process__image" />
            </div>
          </Col>
        </Row>
        <Row className="process__row">
          <Col className="process__card-image-wrapper" xl={6}>
            <Image src={download} className="process__card-image" />
          </Col>
          <Col className="process__card-wrapper" xl={6}>
            <ProcessCard
              count="1"
              title="Download our App and Signup"
              text="Enter your mobile number and desired PIN"
            />
          </Col>
        </Row>
        <Row className="process__row">
          <Col className="process__card-wrapper" xl={6}>
            <ProcessCard
              count="2"
              title="Choose Product"
              text="Variety of products available to choose from. Filter your product by any category"
            />
          </Col>
          <Col className="process__card-image-wrapper" xl={6}>
            <Image src={choose} className="process__card-image" />
          </Col>
        </Row>
        <Row className="process__row">
          <Col className="process__card-image-wrapper" xl={6}>
            <Image src={lease} className="process__card-image" />
          </Col>
          <Col className="process__card-wrapper" xl={6}>
            <ProcessCard
              count="3"
              title="Generate Installment Plan"
              text="Customise your installment plans with variable tenure and down payment"
            />
          </Col>
        </Row>
        <Row className="process__row">
          <Col className="process__card-wrapper" xl={6}>
            <ProcessCard
              count="4"
              title="Tell us about yourself"
              text="Upload your personal, residential and work details"
            />
          </Col>
          <Col className="process__card-image-wrapper" xl={6}>
            <Image src={upload} className="process__card-image" />
          </Col>
        </Row>
        <Row className="process__row">
          <Col className="process__card-image-wrapper" xl={6}>
            <Image src={pay} className="process__card-image" />
          </Col>
          <Col className="process__card-wrapper" xl={6}>
            <ProcessCard
              count="5"
              title="Pay at Easy Paisa or through Bank Account"
              text="Generate a token and pay at the nearest easy paisa branch or pay through your bank account "
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Process

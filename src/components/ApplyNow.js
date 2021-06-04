import React from "react"
import background_video from "../images/diamond.webm"
import { Container, Row, Col, Image } from "react-bootstrap"
import Button from "../components/Button"

const ApplyNow = () => {
  return (
    <section className="apply">
      <Container>
        <div className="apply__wrapper">
          <div className="apply__video-overlay" />
          <video className="apply__apply-video" autoPlay muted loop>
            <source src={background_video} type="video/webm"></source>
          </video>
          <div className="apply__wrapper-sec">
            <h1 className="apply__title">Easy and simple process</h1>
            <a
              href="https://play.google.com/store/apps/details?id=pk.creditfixv2.app"
              className="footer__link"
            >
              <Button label="Apply Now" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ApplyNow

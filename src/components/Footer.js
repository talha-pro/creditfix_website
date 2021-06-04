import React from "react"
import { Link } from "react-scroll"
import { Link as GatsbyLink } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"
import address from "../images/address.svg"
import footerWave from "../images/footer-wave.svg"
import footerWaveTwo from "../images/footer-wave-two.svg"
import footerWaveThree from "../images/footer-wave-three.svg"
import footer_svg from "../images/footer-svg.svg"
import fb from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import linkedin from "../images/linkedin.svg"
import playstore from "../images/play.png"

const Footer = () => {
  return (
    <footer className="footer">
      <Image className="footer__wave" src={footerWave} />
      <Image className="footer__wave-two" src={footerWaveTwo} />
      <Image className="footer__wave-three" src={footerWaveThree} />
      <Image className="footer__address-svg" src={address} />
      <Image className="footer__footer-svg" src={footer_svg} />
      <Container>
        <Row>
          <Col md={4} lg={4} xl={4} className="footer__col">
            <div className="footer__title">
              Credit<span className="footer__span">Fix</span>
            </div>
            <a href="mailto:support@creditfix.pk" className="footer__email">
              hello@creditfix.pk
            </a>
            <a href="tel:051-2805196" className="footer__phone">
              051-2805196
            </a>
            <div className="footer__address">
              1st Floor, 14E, Manzoor Plaza, Fazle Haq Road, Blue Area,
              Islamabad, Pakistan
            </div>
          </Col>
          <Col md={2} lg={2} xl={2} className="footer__col">
            <div className="footer__heading">More</div>
            <GatsbyLink to="/PrivacyPolicy" className="footer__text">
              Privacy Policy
            </GatsbyLink>
            <GatsbyLink to="/TermsConditions" className="footer__text">
              Terms & Conditions
            </GatsbyLink>
          </Col>
          <Col md={2} lg={2} xl={2} className="footer__col">
            <div className="footer__heading">Company</div>
            <Link className="footer__text" to="about" smooth={true}>
              About Us
            </Link>
            <Link className="footer__text" to="process" smooth={true}>
              Product
            </Link>
            <Link className="footer__text" to="contact" smooth={true}>
              Contact Us
            </Link>
          </Col>
          <Col md={2} lg={2} xl={2} className="footer__col">
            <div className="footer__heading">Follow Us</div>
            <div className="footer__icons-wrapper">
              <a
                href="https://www.facebook.com/creditfixpk"
                className="footer__link"
              >
                <Image src={fb} className="footer__icon" />
              </a>
              <a
                href="https://twitter.com/CreditFixpk"
                className="footer__link"
              >
                <Image src={twitter} className="footer__icon" />
              </a>
              <a
                href="http://linkedin.com/company/creditfixpk"
                className="footer__link"
              >
                <Image src={linkedin} className="footer__icon" />
              </a>
            </div>
          </Col>
          <Col md={2} lg={2} xl={2} className="footer__col">
            <div className="footer__heading">Download App</div>
            <a
              href="https://play.google.com/store/apps/details?id=pk.creditfixv2.app"
              className="footer__link"
            >
              <Image src={playstore} className="footer__google-play" />
            </a>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="footer__copyright">
              Copyright © 2021 | Creditfix
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

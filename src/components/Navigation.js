import React, { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { Link as GatsbyLink } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"
import Button from "./Button"
import logo from "../images/creditfix_logo_lite.svg"

const Navigation = () => {
  const [navBar, setNavBar] = useState(false)

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavBar(true)
      } else {
        setNavBar(false)
      }
    }

    window.addEventListener("scroll", changeBackground)
  }, [])

  return (
    <>
      <div className={navBar ? "nav active" : "nav"}>
        <Container fluid={false} className="nav__container">
          <Row className="nav__row">
            <Col className="nav__col-left" lg={2} xl={2}>
              <GatsbyLink to="/" smooth={true}>
                <Image className="nav__logo" src={logo} fluid={true} />
              </GatsbyLink>
            </Col>
            <Col className="nav__col-right" lg={10} xl={10}>
              <Link className="nav__item" to="about" smooth={true}>
                About Us
              </Link>
              <Link className="nav__item" to="process" smooth={true}>
                Process
              </Link>
              {/* <ScrollLink
                to="features"
                smooth={true}
                duration={1000}
                className="nav__item"
                activeClass="nav__item"
              >
                Features
              </ScrollLink> */}
              {/* <Link className="nav__item" to="features" smooth={true}>
                Features
              </Link> */}
              <Link className="nav__item" to="contact" smooth={true}>
                Contact Us
              </Link>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <GatsbyLink to="/business">
                <Button label="Business" />
              </GatsbyLink>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label for="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link className="navigation__link" to="about" smooth={true}>
                Company
              </Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="process" smooth={true}>
                Product
              </Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="features" smooth={true}>
                Features
              </Link>
            </li>
            <li className="navigation__item">
              <Link className="navigation__link" to="contact" smooth={true}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navigation

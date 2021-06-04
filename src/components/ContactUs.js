import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import contact from "../images/contact.svg"

const ContactUs = props => {
  const { contactStatement } = props

  return (
    <section id="contact" className="contact">
      <Container className="contact__container">
        <Row className="contact__row">
          <Col className="contact__col-right">
            <Image className="contact__image" src={contact} fluid={false} />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={11}
            lg={9}
            xl={8}
            className="contact__col-left"
          >
            <div className="contact__form-wrapper">
              <div className="contact__form--heading">CONTACT US TODAY</div>
              <div className="contact__form--heading">{contactStatement}</div>
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="contact__form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="contact__form-names">
                  <label className="contact__form--label">
                    First Name
                    <input
                      name="firstname"
                      id="firstname"
                      placeholder="Your First Name"
                      className="contact__form--input"
                      type="text"
                    />
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <label className="contact__form--label">
                    Last Name
                    <input
                      id="lastname"
                      name="lastname"
                      placeholder="Your Last Name"
                      className="contact__form--input"
                      type="text"
                    />
                  </label>
                </div>

                <label className="contact__form--email-label">
                  Email
                  <input
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    className="contact__form--input-email"
                    type="text"
                  />
                </label>

                <label className="contact__form--message-label">
                  Message
                  <textarea
                    rows="5"
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="contact__form--input"
                  ></textarea>
                </label>
                <div className="contact__form--button-wrapper">
                  <button
                    type="submit"
                    value="Send Message"
                    className="contact__form--button"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactUs

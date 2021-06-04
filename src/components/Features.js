import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import identity from "../images/identity.svg"
import FeatureCard from "./FeatureCard"
import money from "../images/money_laundering.svg"
import ocr from "../images/ocr.svg"
import bill from "../images/bill.svg"
import facial from "../images/facial.svg"
import report from "../images/report.svg"
import geolocation from "../images/geolocation.svg"
import simcard from "../images/simcard.svg"
import financial from "../images/finance_app.svg"
import credit from "../images/credit.svg"
import Line from "./Line"
import featureWaveUpper from "../images/featureWaveUpper.svg"
import featureWaveLower from "../images/featureWaveLower.svg"
import face from "../images/face.gif"

const Features = () => {
  return (
    <div id="features" name="features" className="features">
      <Image src={featureWaveUpper} className="features__wave-upper" />
      <Image src={featureWaveLower} className="features__wave-lower" />
      <Container>
        <Row>
          <Col xl={12} className="features__col">
            <Line type="large" />
            <h1 className="features__heading">CreditFix App Features</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="features__col-left" lg={4} xl={4}>
            <FeatureCard
              image={identity}
              title="Identity Verification"
              text="Identity verified using surface analysis.
              "
            />
            <FeatureCard
              image={ocr}
              title="OCR based document extraction"
              text="OCR technology to extract data from a range of documents
              "
            />
            <FeatureCard
              image={bill}
              title="Utility Bills Verification"
              text="Historical bill trends are extracted using OCR
              "
            />
            <FeatureCard
              image={facial}
              title="Facial Verification"
              text="Verifies the identity using AI powered facial recognition"
            />
          </Col>
          <Col className="features__col-mid" lg={4} xl={4}>
            <FeatureCard
              image={money}
              title="AML/CFT Compliance"
              text="List of blacklisted entities is maintained.
              "
            />
            <div className="process__image-video-wrapper">
              <Image src={face} fluid={true} className="features__image" />
            </div>
            <FeatureCard
              image={report}
              title="Custom Report Generation"
              text="Customized dashboard according to the needs of your business"
            />
          </Col>
          <Col className="features__col-right" lg={4} xl={4}>
            <FeatureCard
              image={geolocation}
              title="Geolocation Verification"
              text="Geolocation tags to verify customer’s information"
            />
            <FeatureCard
              image={simcard}
              title="OTP and Sim card verification"
              text="Contact number is cross-checked with PTA for verification
              "
            />
            <FeatureCard
              image={financial}
              title="Financial Risk Assessment"
              text="Determine the financial standing of a customer.
              "
            />
            <FeatureCard
              image={credit}
              title="Creditworthiness Assessment"
              text="A scorecard is developed that evaluates loan worthiness of a customer"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xl={12} className="features__col">
            <Image src={face} fluid={true} className="features__image-mobile" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Features

import React from "react"
import SupplyCard from "./SupplyCard"
import Line from "./Line"
import { Container, Row, Col, Image } from "react-bootstrap"
import supplier from "../images/supplier.svg"
import customer from "../images/customer.svg"
import merchant from "../images/merchant.svg"
import backgroundPattern from "../images/backgroundPattern.svg"

const SupplyChain = () => {
  return (
    <div className="supply">
      <Image fluid={true} className="background" src={backgroundPattern} />
      <Container>
        <Row>
          <Col className="supply__upper-col">
            <Line type="large" />
            <div className="supply__heading">Supply Chain Financing</div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="supply__lower-col">
            <SupplyCard
              image={supplier}
              title="Suppliers"
              text="Easy credit to enhance capacity of your suppliers"
            />
            <SupplyCard
              image={customer}
              title="Customers"
              text="Enhance your sales through easy customer financing"
            />
            <SupplyCard
              image={merchant}
              title="Merchants"
              text="Enhancing purchasing capacity of merchant customers"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SupplyChain

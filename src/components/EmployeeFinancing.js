import React from "react"
import Line from "./Line"
import { Container, Row, Col } from "react-bootstrap"
import bike from "../images/bike.svg"
import macbook from "../images/macbook.svg"
import phone from "../images/iphone.svg"
import retailer from "../images/logistics.svg"
import EmployeeCard from "./EmployeeCard"
import financial from "../images/financial_analyst.svg"

const EmployeeFinancing = () => {
  return (
    <div className="employee">
      <Container>
        <Row>
          <Col className="employee__upper-col">
            <Line type="large" />
            <div className="employee__heading">Employee Financing</div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={6} xl={6} className="employee__lower-col-left">
            <EmployeeCard
              image={bike}
              title="Bikes & Scooters"
              text="Interest free financing for acquiring a motorcycle/scooter with easy monthly installments"
            />
            <EmployeeCard
              image={phone}
              title="Mobiles Phones"
              text="Easy installment options for 6 to 24 months"
            />
          </Col>
          <Col lg={6} xl={6} className="employee__lower-col-right">
            <EmployeeCard
              image={macbook}
              title="Home Appliances"
              text="Select and buy from a wide range of household items (To be Annonced Soon)"
            />
            <EmployeeCard
              image={retailer}
              title="Salary Loans"
              text="(To be Announced Soon)"
            />
          </Col>
          <Col className="employee__lower-col-mid">
            <EmployeeCard
              image={financial}
              title="Invoice Financing"
              text="Easy factoring of invoices to improve cash flow of your supply chain"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EmployeeFinancing

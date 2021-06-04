import React from "react"

import Wrapper from "../components/Wrapper"
import SupplyChain from "../components/SupplyChain"
import Features from "../components/Features"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"
import EmployeeFinancing from "../components/EmployeeFinancing"
import Hero from "../components/Hero"
import AboutBusiness from "../components/AboutBusiness"

const business = () => {
  return (
    <Wrapper>
      <Hero
        headlineOne="Innovative"
        headlineTwo="Business Solutions"
        headlineThree="With CreditFix"
        buttonLabel="Connect Now"
      />
      <AboutBusiness />
      <SupplyChain />
      <EmployeeFinancing />
      {/* <Features /> */}
      <ContactUs contactStatement="TO MAKE SURE YOUR BUSINESS IS IN THE RIGHT DIRECTION" />
      <Footer />
    </Wrapper>
  )
}

export default business

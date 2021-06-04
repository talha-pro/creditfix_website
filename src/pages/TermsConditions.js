import React from "react"
import Wrapper from "../components/Wrapper"
import Terms from "../components/Terms"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"

const TermsConditions = () => {
  return (
    <Wrapper>
      <Terms />
      <ContactUs contactStatement="TO MAKE SURE YOUR BUSINESS IS IN THE RIGHT DIRECTION" />
      <Footer />
    </Wrapper>
  )
}

export default TermsConditions

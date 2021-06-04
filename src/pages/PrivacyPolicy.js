import React from "react"
import Wrapper from "../components/Wrapper"
import Privacy from "../components/Privacy"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <Privacy />
      <ContactUs contactStatement="TO MAKE SURE YOUR BUSINESS IS IN THE RIGHT DIRECTION" />
      <Footer />
    </Wrapper>
  )
}

export default PrivacyPolicy

import React from "react"
import Navigation from "./Navigation"
import { Image } from "react-bootstrap"

const Wrapper = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="layout">{children}</div>
    </>
  )
}

export default Wrapper

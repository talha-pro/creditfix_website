import React from "react"
import { Image } from "react-bootstrap"

const PartnerCard = props => {
  const { logo } = props

  return (
    <div className="partner-card">
      <Image fluid={true} src={logo} className="partner-card__logo" />
    </div>
  )
}

export default PartnerCard

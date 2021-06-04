import React from "react"
import { Image } from "react-bootstrap"
import Line from "./Line"

const EmployeeCard = props => {
  const { title, text, image } = props

  return (
    <div className="employee-card">
      <Image className="employee-card__image" fluid={true} src={image} />
      <Line type="small" />
      <div className="employee-card__title-wrapper">
        <div className="employee-card__title">{title}</div>
        <div className="employee-card__text">{text}</div>
      </div>
    </div>
  )
}

export default EmployeeCard

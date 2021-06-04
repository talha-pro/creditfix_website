import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"

const ChooseUsCard = props => {
  const { image, title, text } = props

  return (
    <div className="choose-card">
      <Image src={image} fluid={true} className="choose-card__image" />
      <div className="choose-card__wrapper">
        <h2 className="choose-card__title">{title}</h2>
        <p className="choose-card__text">{text}</p>
      </div>
    </div>
  )
}

export default ChooseUsCard

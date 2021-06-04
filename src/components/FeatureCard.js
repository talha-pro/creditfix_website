import React from "react"

import { Image } from "react-bootstrap"

const FeatureCard = props => {
  const { image, title, text } = props

  return (
    <div className="feature-card">
      <Image className="feature-card__image" src={image} />
      <div>
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__text">{text}</p>
      </div>
    </div>
  )
}

export default FeatureCard

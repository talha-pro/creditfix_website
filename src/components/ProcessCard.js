import React from "react"

const ProcessCard = props => {
  const { count, title, text } = props
  return (
    <div className="process-card">
      <div className="process-card__count">{count}</div>
      <div className="process-card__text-wrapper">
        <div className="process-card__title">{title}</div>
        <div className="process-card__text">{text}</div>
      </div>
    </div>
  )
}

export default ProcessCard

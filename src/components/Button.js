import React from "react"

const Button = props => {
  const { label, type, onClick } = props

  return (
    <button className="button" onClick={onClick}>
      {label}
    </button>
  )
}

export default Button

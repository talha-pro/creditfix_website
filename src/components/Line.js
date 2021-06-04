import React from "react"

const Line = props => {
  const { type, label } = props

  const className = `line ${type}`

  return <div className={className}>{label}</div>
}

export default Line

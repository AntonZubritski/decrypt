import React from 'react'
import './text-result.scss'

const TextResult = ({ ...props }) => {
  const { decryptText } = props

  return <div className="text-result-block">{decryptText}</div>
}
export default TextResult

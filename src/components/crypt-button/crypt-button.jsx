import React from 'react'
import './crypt-button.scss'

const CryptButton = ({ ...props }) => {
  const { valueTextarea, setDecryptText } = props

  const edwardDecrypt = () => {
    let text = ''
    for (let i = 0; i < valueTextarea.length; i++) {
      valueTextarea[i] !== valueTextarea[i + 1]
        ? (text += valueTextarea[i])
        : i++
    }
    setDecryptText(text)
  }

  return (
    <input
      type="button"
      className="btn"
      value="DECRYPT"
      onClick={edwardDecrypt}
    />
  )
}
export default CryptButton

import React from 'react'
import './crypt-button.scss'

const CryptButton = ({ ...props }) => {
  const { checkbox, valueTextarea, setDecryptText } = props

  const edwardDecrypt = () => {
    let text = ''
    for (let i = 0; i < valueTextarea.length; i++) {
      if (valueTextarea[i] !== valueTextarea[i + 1]) {
        text += valueTextarea[i]
      } else if (valueTextarea[i] + valueTextarea[i + 1] === 'qq') {
        text += ' '
        i++
      } else {
        i++
      }
    }
    setDecryptText(text)
  }
  const edwardEncrypt = () => {
    const replaceTextarea = valueTextarea.replace(/[^a-z /s]/g, '')
    const characters = 'abcdefghijklmnoprstuvwxyz'
    let text = ''

    for (let i = 0; i < replaceTextarea.length; i++) {
      let randomLet = characters
        .charAt(Math.floor(Math.random() * characters.length))
        .repeat(2)

      if (replaceTextarea[i] === replaceTextarea[i + 1]) {
        text += replaceTextarea[i] + randomLet
      } else if (replaceTextarea[i] === ' ') {
        text += 'qq'
      } else {
        text += replaceTextarea[i] + (Math.random() <= 0.65 ? randomLet : '')
      }
    }
    setDecryptText(text)
  }

  return (
    <input
      type="button"
      className="btn"
      value={checkbox ? 'ENCRYPT' : 'DECRYPT'}
      onClick={checkbox ? edwardEncrypt : edwardDecrypt}
    />
  )
}
export default CryptButton

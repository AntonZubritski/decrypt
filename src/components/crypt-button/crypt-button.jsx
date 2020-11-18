import React from 'react'
import './crypt-button.scss'

const CryptButton = ({ ...props }) => {
  const { checkbox, valueTextarea, setDecryptText } = props

  const edwardDecrypt = () => {
    setDecryptText(valueTextarea.replaceAll(/([a-z])\1/g, ''))
  }


  const edwardEncrypt = () => {
    const replaceTextarea = valueTextarea.replaceAll(/[,.!?:;'"/ —-]/g, '')
    let text = ''

    for (let i = 0; i < replaceTextarea.length; i++) {
      let randomLet = String.fromCharCode(
        Math.floor(97 + Math.random() * (122 + 1 - 97))
      ).repeat(2)

      if (replaceTextarea[i] === replaceTextarea[i + 1]) {
        text += replaceTextarea[i] + randomLet
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

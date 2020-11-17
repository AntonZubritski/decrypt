import React from 'react'
import CryptButton from '../crypt-button/crypt-button'
import './decrypt-button-group.scss'

const DecryptButtonGroup = ({ ...props }) => {
  const { valueTextarea, setDecryptText } = props

  return (
    <div className="decrypt-button">
      <CryptButton
        valueTextarea={valueTextarea}
        setDecryptText={setDecryptText}
      />
    </div>
  )
}
export default DecryptButtonGroup

import React, { useState } from 'react'
import CheckBox from '../checkbox/checkbox'
import CryptButton from '../crypt-button/crypt-button'
import './decrypt-button-group.scss'

const DecryptButtonGroup = ({ ...props }) => {
  const { valueTextarea, setValueTextarea, setDecryptText } = props
  const [checkbox, setCheckbox] = useState(false)

  return (
    <div className="decrypt-button">
      <CheckBox setCheckbox={setCheckbox} setValueTextarea={setValueTextarea} />
      <CryptButton
        checkbox={checkbox}
        valueTextarea={valueTextarea}
        setDecryptText={setDecryptText}
      />
    </div>
  )
}
export default DecryptButtonGroup

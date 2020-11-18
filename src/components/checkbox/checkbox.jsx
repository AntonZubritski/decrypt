import React from 'react'
import './checkbox.scss'

const CheckBox = ({ ...props }) => {
  const { setCheckbox, setValueTextarea, setDecryptText } = props
  const checkBox = (e) => {
    e.target.checked ? setCheckbox(true) : setCheckbox(false)
    setValueTextarea('')
    setDecryptText('')
  }

  return <input type="checkbox" onClick={checkBox} />
}
export default CheckBox

import React from 'react'
import './checkbox.scss'

const CheckBox = ({ ...props }) => {
  const { setCheckbox, setValueTextarea } = props
  const checkBox = (e) => {
    e.target.checked ? setCheckbox(true) : setCheckbox(false)
    setValueTextarea('')
  }

  return <input type="checkbox" onClick={checkBox} />
}
export default CheckBox

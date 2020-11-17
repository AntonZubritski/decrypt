import React from 'react'
import './textarea.scss'
const TextArea = ({ ...props }) => {
  const { valueTextarea, setValueTextarea, setDecryptText } = props

  const onChangeTextarea = (e) => {
    const { value } = e.target
    setDecryptText('')
    setValueTextarea(value.toLowerCase())
  }

  return (
    <div className="textarea">
      <textarea value={valueTextarea} onChange={onChangeTextarea} />
      <div>
        <input
          readOnly
          type="text"
          size="6"
          value={100000 - valueTextarea.length}
        />
        characters left
      </div>
    </div>
  )
}
export default TextArea

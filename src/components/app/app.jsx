import './app.scss'
import { useState } from 'react'
import TextArea from '../textarea/textarea'
import DecryptButtonGroup from '../decrypt-button-group/decrypt-button-group'
import TextResult from '../text-result/text-result'
import Header from '../header/header'

const App = () => {
  const [valueTextarea, setValueTextarea] = useState('')
  const [decryptText, setDecryptText] = useState('')

  return (
    <div className="wrapper">
      <Header />
      <TextArea
        valueTextarea={valueTextarea}
        setValueTextarea={setValueTextarea}
        setDecryptText={setDecryptText}
      />
      <DecryptButtonGroup
        valueTextarea={valueTextarea}
        setValueTextarea={setValueTextarea}
        setDecryptText={setDecryptText}
      />
      <TextResult decryptText={decryptText} />
    </div>
  )
}

export default App

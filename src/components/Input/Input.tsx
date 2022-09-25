import { useState } from "react"
import "./Input.scss"

const Input = () => {
  const [value, setValue] = useState()
  const handleChange = (e: any) => {
    setValue(e.target.value)
  }
  return (
    <div className='wrapperTextArea'>
      <textarea className='textArea' value={value} onChange={(e) => handleChange(e)} />
    </div>
  )
}


export default Input

import "./Input.scss"

interface InputProps {
  value: string
  setValue: (string: string) => void
  names: []
  setNames: (any: any) => void
}

const Input = ({ value, setValue, names, setNames }: InputProps) => {
  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  const handleClick = () => {
    if (value) {
      setNames((names: []) => [...names, value])
    }
    setValue("")
  }

  const handleOnKeyDown = (e: any) => {
    if (e.keyCode === 13 && value) {
      setNames((names: []) => [...names, value])
      setValue("")
    }
  }

  const renderNames = () => {
    return names.map((name: string) => {
      return <div className="names">{name}</div>
    })
  }

  const handleClear = () => {
    setNames([])
  }

  return (
    <div className="wrapperTextArea">
      <input
        className="textArea"
        value={value}
        onChange={(e) => handleChange(e)}
        onKeyDown={handleOnKeyDown}
      />
      <button onClick={handleClick}>add</button>
      <span className="padding">
        <button onClick={handleClear}>clear</button>
      </span>
      {renderNames()}
    </div>
  )
}

export default Input

import "./Input.scss"

interface InputProps {
  value: string
  setValue: (string: string) => void
  names: any
  setNames: (any: any) => void
  removeItemArray: (name: string) => void
}

const Input = ({
  value,
  setValue,
  names,
  setNames,
  removeItemArray,
}: InputProps) => {
  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  const alreadyOnArray = (check: any) => {
    return names.includes(check)
  }

  const handleClick = () => {
    if (value && !alreadyOnArray(value)) {
      setNames((names: []) => [...names, value])
    }
    setValue("")
  }

  const handleOnKeyDown = (e: any) => {
    if (e.keyCode === 13 && value && !alreadyOnArray(value)) {
      setNames((names: []) => [...names, value])
      setValue("")
    }
  }

  const removeFromList = (name: any) => {
    removeItemArray(name)
  }

  const renderNames = () => {
    return names.map((name: string) => {
      return (
        <div className="cardWrapper" key={name}>
          <button
            className="card card--secondary"
            onClick={() => removeFromList(name)}
          >
            <span className="card__content">{name}</span>
            <span className="card__glitch"></span>
            <span className="card__label">r25</span>
          </button>
        </div>
      )
    })
  }

  const handleClear = () => {
    setNames([])
  }

  return (
    <div className="wrapperTextArea">
      <input
        className="textArea"
        placeholder="add names"
        value={value}
        onChange={(e) => handleChange(e)}
        onKeyDown={handleOnKeyDown}
      />
      <button className="buttonAdd" onClick={handleClick}>
        add
      </button>
      <span className="padding">
        <button className="buttonAdd" onClick={handleClear}>
          clear
        </button>
      </span>
      {renderNames()}
    </div>
  )
}

export default Input

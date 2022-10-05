import useSound from "use-sound"
import "./Input.scss"
import * as S from "./styles"

const ASSETS = `${process.env.PUBLIC_URL}/assets/`
const SOUND_CLICK = ASSETS + "sounds/click.mp3"

export interface InputProps {
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
  const [playSound] = useSound(SOUND_CLICK)
  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  const alreadyOnArray = (check: any) => {
    return names.includes(check)
  }

  const handleClick = () => {
    playSound()
    if (value && !alreadyOnArray(value)) {
      setNames((names: []) => [...names, value])
    }
    setValue("")
  }

  const handleOnKeyDown = (e: any) => {
    if (e.keyCode === 13 && value && !alreadyOnArray(value)) {
      playSound()
      setNames((names: []) => [...names, value])
      setValue("")
    }
  }

  const removeFromList = (name: any) => {
    playSound()
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
    playSound()
    setNames([])
    setValue("")
  }

  return (
    <div className="wrapperTextArea">
      <S.Cursor>
        <input
          className="textArea"
          placeholder="add names"
          value={value}
          onChange={(e) => handleChange(e)}
          onKeyDown={handleOnKeyDown}
        />
        <i />
      </S.Cursor>
      <S.BtnWrapper>
        <div className="buttonOptionWrapper">
          <button
            className="btnOptionCyber card--secondary"
            onClick={handleClick}
          >
            <span className="card__content">add</span>
            <span className="card__glitch"></span>
            <span className="card__label">r22</span>
          </button>
        </div>
        <div className="buttonOptionWrapper">
          <button
            className="btnOptionCyber card--secondary"
            onClick={handleClear}
          >
            <span className="card__content">clear</span>
            <span className="card__glitch"></span>
            <span className="card__label">r22</span>
          </button>
        </div>
      </S.BtnWrapper>
      {renderNames()}
    </div>
  )
}

export default Input

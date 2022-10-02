import React, { useState } from "react"
import * as S from "./styles"
import CyberContent from "../CyberContent/CyberContent"
import Button from "../Button/Button"
import Terminal from "../Terminal/Terminal"

const namesList = [
  "Phoenix",
  "Zorc",
  "Simon",
  "Julie",
  "Larissa",
  "Jonny",
  "Felix",
]

const TIME_DURING_STOP = 2000

interface NamePickerProps {
  names: string[]
  hackedNameState: string | undefined
}

const NamePicker = ({ names, hackedNameState }: NamePickerProps) => {
  const getNames = names.length ? names : namesList
  const [content, setContent] = useState<any>()
  const [terminal, enableTerminal] = useState<boolean>(false)
  const [timer, setTimer] = useState<any>(null)
  const [buttonState, setButton] = useState<any>("enable")
  let i = 0

  const handleStart = () => {
    enableTerminal(false)
    setTimer(
      setInterval(function () {
        setContent(getNames[i++ % getNames.length])
      }, 50)
    )
  }

  const handleStop = () => {
    enableTerminal(true)
    if (names.length) {
      setButton("disabling")
      setTimeout(() => {
        clearInterval(timer)
        setTimer(null)
        setButton("enable")
      }, TIME_DURING_STOP)
    } else {
      clearInterval(timer)
      setTimer(null)
    }

    console.log("content", content)
    console.log("hackedNameState", hackedNameState)
  }

  const renderButton = () => {
    let button: any = null

    if (!timer) {
      button = (
        <div onClick={handleStart}>
          <Button>Start</Button>
        </div>
      )
    }
    if (timer) {
      button = (
        <div onClick={handleStop}>
          <Button secondary>Stop</Button>
        </div>
      )
    }
    if (buttonState === "disabling") {
      button = (
        <div onClick={handleStop}>
          <Button secondary>Stopping</Button>
        </div>
      )
    }

    return button
  }

  const isHacked = content === hackedNameState

  return (
    <S.Wrapper>
      <S.CyberText>
        <CyberContent>{content}</CyberContent>
        {(isHacked && terminal && !timer) && (
          <div>
            <S.Hacked>The name has been hacked!</S.Hacked>
            Choose again!
          </div>
        )}
      </S.CyberText>
      <S.ButtonWrapper>{renderButton()}</S.ButtonWrapper>
      {terminal && !!names.length && <Terminal hackedName={hackedNameState} />}
    </S.Wrapper>
  )
}

export default NamePicker

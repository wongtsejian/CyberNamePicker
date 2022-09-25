import React, { useState } from "react"
import * as S from "./styles"
import CyberContent from "../CyberContent/CyberContent"
import Button from "../Button/Button";

// Add list of names here
const namesList = [
  "Phoenix",
  "Zorc",
  "Simon",
  "Julie",
  "Larissa",
  "Jonny",
  "Felix",
]

const NamePicker = () => {
  const [content, setContent] = useState<any>()
  const [timer, setTimer] = useState<any>(null)
  let i = 0

  const handleStart = () => {
    setTimer(
      setInterval(function () {
        setContent(namesList[i++ % namesList.length])
      }, 50)
    )
  }

  const handleStop = () => {
    clearInterval(timer)
    setTimer(null)
  }

  return (
    <S.Wrapper>
      <S.CyberText>
        <CyberContent>{content}</CyberContent>
      </S.CyberText>
      <S.ButtonWrapper>
        {!timer ? (
          <div onClick={handleStart}>
            <Button>Start</Button>
          </div>
        ) : (
          <div onClick={handleStop}>
            <Button secondary>Stop</Button>
          </div>
        )}
        <div></div>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default NamePicker

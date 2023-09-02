import React, { useEffect, useState } from "react"
import CyberContent from "../CyberContent/CyberContent"
import Button from "../Button/Button"
import Terminal from "../Terminal/Terminal"
import useSound from "use-sound"
import * as S from "./styles"

const ASSETS = `${process.env.PUBLIC_URL}/assets/`
const SOUND_TYPE = ASSETS + "sounds/type.mp3"
const SOUND_CLICK = ASSETS + "sounds/click.mp3"

const namesList = [
  "Aaron Chua",
  "Alvin Lim",
  "Anita Tsai",
  "Annisa Novitasari",
  "Bing Wen Lim",
  "Chih-Hao Hsueh",
  "Corey Feng",
  "David Jonathan Choo",
  "Duy Nguyen",
  "Elizabeth Woo",
  "George Qiao",
  "Gloria He",
  "Guan Li",
  "Gwenda Soh Xiu Zhen",
  "Ian Seow",
  "Indra Bagza",
  "Isaac Lim",
  "Jacob Shan",
  "Josiah Choong",
  "Kah Hong Tay",
  "Katness Chen",
  "Kenny Hua Chan",
  "Latifa Sabrina Mahestri Putri Kusuma",
  "Nathasa Gresy Dea Anlita",
  "Regina Chan",
  "Rida",
  "Sang Nguyen",
  "Seokmin",
  "Septama Putra",
  "Sonia Elmina",
  "Teo Jie Han Terence",
  "Tianwei Liu",
  "Si Hui Foo Venice",
  "Victor Liew",
  "Weiling Lee",
  "Wei Yi Chiu",
  "Zack Yap",
]

const TIME_DURING_STOP = 3000 // keep going

interface NamePickerProps {
  names: string[]
  hackedNameState: string | undefined
  setToggle: any
  toggle: boolean
}

const NamePicker = ({
  names,
  hackedNameState,
  setToggle,
  toggle,
}: NamePickerProps) => {
  const [playSound] = useSound(SOUND_CLICK)
  const [play, { stop }] = useSound(SOUND_TYPE, { loop: true })

  const getNames = names.length ? names : namesList
  const [content, setContent] = useState<any>()
  const [terminal, enableTerminal] = useState<boolean>(false)
  const [timer, setTimer] = useState<any>(null)
  const [buttonState, setButton] = useState<any>("enable")
  let i = 0

  useEffect(() => {
    if (names) {
      enableTerminal(false)
    }
  }, [names])

  const handleStart = () => {
    setToggle(!toggle)
    playSound()
    if (timer) {
      console.log("%c Too Fast!", "color: yellow; background: red")
    }
    enableTerminal(false)
    setTimer(
      setInterval(function () {
        setContent(getNames[i++ % getNames.length])
      }, 50)
    )
  }

  const handleStop = () => {
    playSound()

    if (buttonState === "disabling") {
      return
    }
    stop()
    if (names.length) {
      if (names.length > 2) {
        enableTerminal(true)
        play()
        setTimeout(() => {
          stop()
          setContent(hackedNameState)
        }, 3000)
      } else {
        enableTerminal(false)
      }
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
          <Button secondary>WAIT</Button>
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
        {isHacked && terminal && !timer && (
          <div>
            <S.Hacked>You have been nominated!</S.Hacked>
            <S.pdTop>Congratulations!</S.pdTop>
          </div>
        )}
      </S.CyberText>
      <S.ButtonWrapper>{renderButton()}</S.ButtonWrapper>
      {terminal && !!names.length && <Terminal hackedName={hackedNameState} />}
    </S.Wrapper>
  )
}

export default NamePicker

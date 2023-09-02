import React, { useEffect, useState } from "react"
import NamePicker from "./components/NamePicker/NamePicker"
import Footer from "./components/Footer/Footer"
import ProgressBar from "./components/ProgressBar/ProgressBar"
import Input from "./components/Input/Input"
import useLocalStorage from "./Utils/useLocalStorage"
import * as S from "./styles"
import SideBar from "./components/SideBar/Sidebar"
import "./App.scss"
import CyberHelp from "./components/CyberHelp/CyberHelp"

const getRandomItem = (list: string[]) => {
  return list[Math.floor(Math.random() * list.length)]
}

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth)

  function handleWindowSizeChange() {
    if (help === true) {
      setHelp(false)
    }
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })

  const isMobile = width <= 768

  const [value, setValue] = useState("")
  const [help, setHelp] = useState(false)
  const [names, setNames] = useState<any>([
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
  ])
  const [hackedNameState, setHackedName] = useState<any>("")
  const [namesL, setNamesL] = useLocalStorage("name", [])
  const [toggle, setToggle] = useState(false)
  const handleHelp = () => {
    setHelp(!help)
  }
  const copyArray = [...names]

  const removeItemArray = (item: string) => {
    const findName = names.filter((n: string) => {
      return item !== n
    })
    setNames(findName)
  }

  useEffect(() => {
    const getHackedName = () => getRandomItem(copyArray)
    setHackedName(getHackedName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [names, toggle])

  useEffect(() => {
    setNamesL(names)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [names])

  // load from Localstorage (lol)
  useEffect(() => {
    if (namesL.length) {
      setNames(namesL)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="Container">
      <div className="Wrapper">
        {!isMobile && <CyberHelp handleClick={handleHelp} help={help} />}
        {!help && (
          <S.FlexSideBar>
            <S.Flex>
              <div className="App">
                <NamePicker
                  names={names}
                  hackedNameState={hackedNameState}
                  setToggle={setToggle}
                  toggle={toggle}
                />
                <S.Progress>
                  <ProgressBar />
                </S.Progress>
              </div>
              {!isMobile && (
                <S.SideInput>
                  <Input
                    removeItemArray={removeItemArray}
                    value={value}
                    setValue={setValue}
                    names={names}
                    setNames={setNames}
                  />
                </S.SideInput>
              )}
            </S.Flex>
            {isMobile && (
              <SideBar
                removeItemArray={removeItemArray}
                value={value}
                setValue={setValue}
                names={names}
                setNames={setNames}
              />
            )}
          </S.FlexSideBar>
        )}
      </div>
      {names.length < 10 && <Footer />}
    </div>
  )
}

export default App

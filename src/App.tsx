import React, { useEffect, useState } from "react"
import NamePicker from "./components/NamePicker/NamePicker"
import Footer from "./components/Footer/Footer"
import ProgressBar from "./components/ProgressBar/ProgressBar"
import Input from "./components/Input/Input"
import useLocalStorage from "./Utils/useLocalStorage"

import "./App.scss"

const getRandoItemFromArray = (list: string[]) => {
  console.log("hack executed")
  return list[Math.floor(Math.random() * list.length)]
}

function App() {
  const [value, setValue] = useState("")
  const [names, setNames] = useState<any>([])
  const [hackedNameState, setHackedName] = useState<any>("")
  const [namesL, setNamesL] = useLocalStorage("name", "Bob")

  const copyArray = [...names]

  useEffect(() => {
    const getHackedName = () => getRandoItemFromArray(copyArray)
    setHackedName(getHackedName)
  }, [names])

  useEffect(() => {
    setNamesL(names)
  }, [names])

  // load from Localstorage (lol)
  useEffect(() => {
    if (namesL.length) {
      setNames(namesL)
    }
  }, [])

  return (
    <div className="Container">
      <div className="Wrapper">
        <div className="App">
          <NamePicker names={names} hackedNameState={hackedNameState} />
          <ProgressBar />
        </div>
        <Input
          value={value}
          setValue={setValue}
          names={names}
          setNames={setNames}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App

import React, { useState } from "react"
import "./App.scss"
import NamePicker from "./components/NamePicker/NamePicker"
import Footer from "./components/Footer/Footer"
import ProgressBar from "./components/ProgressBar/ProgressBar"
import Input from "./components/Input/Input"

function App() {
  const [value, setValue] = useState("")
  const [names, setNames] = useState<any>([])

  return (
    <div className="Container">
      <div className="Wrapper">
        <div className="App">
          <NamePicker names={names} />
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

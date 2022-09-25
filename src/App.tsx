import React from "react"
import "./App.scss"
import NamePicker from "./components/NamePicker/NamePicker"
import Footer from "./components/Footer/Footer"
import ProgressBar from "./components/ProgressBar/ProgressBar"
import Input from "./components/Input/Input"

function App() {
  return (
    <div className="Container">
      <div className="Wrapper">
        <div className="App">
          <NamePicker />
          <ProgressBar />
        </div>
        <Input />
      </div>
        <Footer />
    </div>
  )
}

export default App

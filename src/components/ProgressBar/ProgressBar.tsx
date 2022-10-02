import { useEffect, useState } from "react"
import "./ProgressBar.scss"

const ProgressBar = () => {
  const [counterState, setCounter] = useState(0)
  const max = 100
  let timer: any
  useEffect(() => {
    clearInterval(timer)
    timer = setInterval(() => {
      if (counterState === 100) {
        clearInterval(timer)
        return
      }
      setCounter((prev) => prev + 1)
      // counter++
    }, 10)

    return () => clearInterval(timer)
  }, [counterState])

  return (
    <div className="wrapper">
      <div className="neon-bar">
        <progress className="bar" value={counterState} max="100">
        </progress>
        <span className="bar__value">{counterState === 100 ? null : counterState}</span>
      </div>
    </div>
  )
}

export default ProgressBar

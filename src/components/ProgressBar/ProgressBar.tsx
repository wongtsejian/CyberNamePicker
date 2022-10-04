import { useEffect, useState } from "react"
import "./ProgressBar.scss"

const ProgressBar = () => {
  const [counterState, setCounter] = useState(0)
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
    }, 50)

    return () => clearInterval(timer)
  }, [counterState])

  return (
    <div className="wrapper">
      <div className="loading">
        {counterState > 95 ? null : "LOADING..."}
      </div>

      <div className="neon-bar">
        {counterState !== 100 && (
          <progress className="bar" value={counterState} max="100"></progress>
        )}

        <span className="bar__value">
          {counterState === 100 ? null : counterState}
        </span>
      </div>
    </div>
  )
}

export default ProgressBar

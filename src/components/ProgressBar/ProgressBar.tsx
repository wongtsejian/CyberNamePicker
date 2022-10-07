import { useEffect, useState } from "react"
import "./ProgressBar.scss"

const ProgressBar = () => {
  const [counterState, setCounter] = useState(0)
  let timer: any
  useEffect(() => {
    clearInterval(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setInterval(() => {
      if (counterState === 100) {
        clearInterval(timer)
        return
      }
      setCounter((prev) => prev + 1)
      // counter++
    }, 25)

    return () => clearInterval(timer)
  }, [counterState])

  const load1 = (counterState > 0 && counterState < 30)
  const load2 = (counterState >= 30 && counterState < 60)
  const load3 = (counterState >= 60 && counterState < 90)
  const load4 = (counterState >= 90 && counterState < 100)
  return (
    <div className="wrapper">
      <div className="loading">
        {load1 && "LOADING..."}
        {load2 && "CONFIGURING WEBPACK..."}
        {load3 && "UPDATING NPM PACKAGES..."}
        {load4 && "FINISHING..."}
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

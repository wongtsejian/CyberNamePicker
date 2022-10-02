import * as S from "./styles"
import { TypeAnimation } from "react-type-animation"

interface TerminalProps {
  hackedName?: any
}
const Terminal = ({ hackedName }: TerminalProps) => {
  return (
    <div>
      <S.Wrapper>
        <TypeAnimation
          sequence={[
            "Cyber Atack has been detected!",
            1000,
            () => {
              console.log("Done typing!")
            },
          ]}
          wrapper="div"
          cursor={false}
          repeat={Infinity}
          style={{ fontSize: "2em" }}
        />
      </S.Wrapper>
      <S.Wrapper>
        <TypeAnimation
          sequence={[
            "Detecting name hacked...",
            600,
            `Hacked name detected: ${hackedName}`,
            700,
            () => {
              console.log("Done typing!")
            },
          ]}
          wrapper="div"
          cursor={true}
          speed={70}
          repeat={0}
          style={{ fontSize: "1em" }}
        />
      </S.Wrapper>
    </div>
  )
}

export default Terminal

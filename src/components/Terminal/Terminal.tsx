import * as S from "./styles"
import { TypeAnimation } from "react-type-animation"

import "./Terminal.scss"
import { Mg5 } from "./styles"

interface TerminalProps {
  hackedName?: any
}


const Terminal = ({ hackedName }: TerminalProps) => {
  return (
    <div className="frame">
      <div className="glow222">
        <S.Wrapper>
          <TypeAnimation
            sequence={["Cyber Atack has been detected!", 1000, () => {}]}
            wrapper="div"
            cursor={false}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
        </S.Wrapper>
        <S.Wrapper>
          <Mg5>
          <TypeAnimation
            sequence={[
              "Detecting name hacked...",
              600,
              `Hacked name detected: ${hackedName}`,
              700,
              () => {},
            ]}
            wrapper="div"
            cursor={true}
            speed={70}
            repeat={0}
            style={{ fontSize: "1em" }}
          />
          </Mg5>
        </S.Wrapper>
      </div>
    </div>
  )
}

export default Terminal

import { useTransition, animated, config } from "react-spring"

import * as S from "./styles"

interface ICyberHelp {
  handleClick: any
  help: boolean
}

export const CyberHelp = ({ handleClick, help }: ICyberHelp) => {
  const transitions = useTransition(help, {
    from: {
      opacity: 0,
      transform: "translate3d(100%,0,0)",
      position: "absolute" as "absolute",
      width: "100%",
      height: "100%",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)",
      position: "absolute" as "absolute",
    },
    leave: {
      opacity: 0,
      transform: "translate3d(100%,0,0)",
      position: "absolute" as "absolute",
    },
    unique: true,
    config: config.stiff,
  })

  return transitions((styles, item): any => {
    return item ? (
      <animated.div style={styles}>
        <S.Wrapper>
          <animated.div style={styles}>
            <S.CloseButton
              onClick={handleClick}
              role="button"
              aria-label="close button"
            >
              Close
            </S.CloseButton>
            <S.InputWrapper>NO HELP AVAILABLE YET - no resources</S.InputWrapper>
          </animated.div>
        </S.Wrapper>
      </animated.div>
    ) : (
      <S.Closed onClick={handleClick}>
        <S.Text>Help</S.Text>
      </S.Closed>
    )
  })
}

export default CyberHelp

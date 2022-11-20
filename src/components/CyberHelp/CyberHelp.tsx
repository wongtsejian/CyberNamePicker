import { useTransition, animated, config } from "react-spring"

import * as S from "./styles"

const cyberPunkGuyOnBuilding =
  process.env.PUBLIC_URL + "/assets/pics/cyberpunk.gif"

interface ICyberHelp {
  handleClick: any
  help: boolean
}

export const CyberHelp = ({ handleClick, help }: ICyberHelp) => {
  const transitions = useTransition(help, {
    from: {
      opacity: 0,
      transform: "translate3d(-100%,0,0)",
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
      transform: "translate3d(-100%,0,0)",
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

            <S.FlexContainer>
              <S.InputWrapper>
                <S.Text>No resources on line!</S.Text>
              </S.InputWrapper>

              <S.Image>
                <img src={cyberPunkGuyOnBuilding} alt="cyberpunk guy smoking" />
              </S.Image>
              <S.InputWrapper>
                <button className="btn btn--third" onClick={handleClick}>
                  <span className="btn__content">Close</span>
                  <span className="btn__glitch2"></span>
                  <span className="btn__label">r25</span>
                </button>
              </S.InputWrapper>
            </S.FlexContainer>
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

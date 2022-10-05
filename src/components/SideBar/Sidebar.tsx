import { useState } from "react"
import { useTransition, animated, config } from "react-spring"

import * as S from "./styles"
import Input, { InputProps } from "../Input/Input"

export const SideBar = ({
  value,
  setValue,
  names,
  setNames,
  removeItemArray,
}: InputProps) => {
  const [toggle, setToggle] = useState(false)
  const transitions = useTransition(toggle, {
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
    // reverse: toggle,
    // delay: 200,
    //config: config.molasses,
    // onRest: () => setToggle(!toggle),
  })

  const handleClick = () => {
    setToggle(!toggle)
  }

  return transitions((styles, item, props, style): any => {
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
            <S.InputWrapper>
              <Input
                value={value}
                setValue={setValue}
                names={names}
                setNames={setNames}
                removeItemArray={removeItemArray}
              />
            </S.InputWrapper>
          </animated.div>
        </S.Wrapper>
      </animated.div>
    ) : (
      <S.Closed onClick={handleClick}>
        <S.Text>Open</S.Text>
      </S.Closed>
    )
  })
}

export default SideBar

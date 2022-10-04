import styled from "@emotion/styled"

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const Cursor = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  i {
    position: absolute;
    width: 3px;
    height: 50%;
    background-color: #dbf110;
    left: 9px;
    top: 9px;
    animation-name: blink;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    opacity: 1;
  }

  input:focus + i {
    display: none;
  }

  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`

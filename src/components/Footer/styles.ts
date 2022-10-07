import styled from "@emotion/styled"

export const Wrapper = styled.div`
  position: relative;
  z-index: 100;
  height: 10vh;
  background-color: #111215;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Tomorrow, sans-serif;
  font-size: 0.85rem;
  text-transform: uppercase;

  a {
    &:hover {
      color: green;
    }

    cursor: pointer;
  }
`

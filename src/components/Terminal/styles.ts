import styled from "@emotion/styled"

export const Wrapper = styled.div`
  height: 30px;
  background-color: #282c34;
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
export const Hacked = styled.div`
  padding-left: 10px;
  color: green;
`

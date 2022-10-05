import styled from "@emotion/styled"

export const Wrapper = styled.div`
  pointer-events: none;
  height: 30px;
  background-color: #031e03;
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
export const Mg5 = styled.div`
  padding-top: 5px;
  @media only screen and (max-width: 768px) {
    padding-top: 20px;
  }
`

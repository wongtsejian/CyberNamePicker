import styled from "@emotion/styled"

export const Wrapper = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: 768px) {
    padding-left: 120px; // centering a bit
  }
  background-color: black;
  color: aquamarine;
`

export const pdTop = styled.div`
  padding-top: 10px;
`

export const ButtonWrapper = styled.div`
  @media only screen and (max-width: 768px) {
  }
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const CyberText = styled.div`
  min-height: 200px;
  font-family: Tomorrow, sans-serif;
`
export const Hacked = styled.div`
  font-family: Tomorrow, sans-serif;
  margin-top: 10px;
  color: red;
  font-size: 30px;
`

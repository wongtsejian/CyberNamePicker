import * as S from "./styles"

interface TerminalProps {
  hackedName?: string
}
const Terminal = ({ hackedName }: TerminalProps) => {
  return (
    <div>
      <S.Wrapper>
        We have identified that there is a script atack changing the array.
      </S.Wrapper>
      <S.Wrapper>
        The following name has been hacked:
        <S.Hacked>{hackedName}</S.Hacked>
      </S.Wrapper>
    </div>
  )
}

export default Terminal

import * as S from './styles'

interface InputProps {
    placeholder: string
}

export const InputWithRoundedBorder : React.FC<InputProps> = ({placeholder}) => {
    return(
        <>
        <S.InputDefault placeholder={placeholder}/>
        </>
    )
}
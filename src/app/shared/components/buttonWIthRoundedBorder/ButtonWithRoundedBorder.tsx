import * as S from './styles'

interface ButtonProps {
    buttonText: string
}

export const ButtonWithRoundedBorder : React.FC<ButtonProps> = ({buttonText}) => {
    return (
        <S.Button>{buttonText}</S.Button>
    )
}
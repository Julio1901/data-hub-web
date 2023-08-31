import * as S from './styles'

interface ButtonProps {
    buttonText: string
    onClick: () => void
}

export const ButtonWithRoundedBorder : React.FC<ButtonProps> = ({buttonText, onClick}) => {
    return (
        <S.Button onClick={onClick}>{buttonText}</S.Button>
    )
}
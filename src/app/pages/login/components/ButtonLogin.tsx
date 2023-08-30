

interface IButtonLoginProps {
    type?: "button" | "submit" | "reset";
    onClick: () => void;
    children: React.ReactNode;
}

// Outro modo de fazer isso sem usar o props 
// export const ButtonLogin: React.FC<IButtonLoginProps> = (props) => {
//     return(
//         <button type={props.type} onClick={props.onClick}>Log in</button>
//     )
// }


export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick, children}) => {
    return(
        <button type={type} onClick={onClick}>{children}</button>
    )
}
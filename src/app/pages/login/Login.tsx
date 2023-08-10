import { useNavigate } from "react-router-dom"; 

export const Login = () => {

    const navigate = useNavigate();

    // Segundo modo de fazer navegação
    const handleClick = () => {
        navigate("/initial-page");
    }

    return (
        <div>
            Login
            <button onClick={handleClick}>Initial page</button>
        </div>
    );
}
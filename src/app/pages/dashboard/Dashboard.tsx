import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { LoggedUserContext } from "../../shared/contexts";

export const Dashboard = () => {

    //Criando um objeto que tem o parâmetro counter do tipo numérico
    const counterRef = useRef({ counter: 0 });


    //Usando contexto para pegar informações comuns a todos os componentes que estejam dentro do mesmo contexto
    // Exemplo usando a desestruturação do objeto
    const {userName} = useContext(LoggedUserContext);

    return (
        <>
            <p>Dashboard</p>
        
            <p>{userName}</p>

            <p>Contador: {counterRef.current.counter}</p>

            <button  onClick={ () => counterRef.current.counter ++ }>Somar</button>
            
            {/* Primeiro modo de fazer navegação */}
            <Link to="/login">Login</Link>
        </>
    );
}
import { useRef } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {

    //Criando um objeto que tem o parâmetro counter do tipo numérico
    const counterRef = useRef({ counter: 0 });


    return (
        <>
            <p>Dashboard</p>

            <p>Contador: {counterRef.current.counter}</p>

            <button  onClick={ () => counterRef.current.counter ++ }>Somar</button>
            
            {/* Primeiro modo de fazer navegação */}
            <Link to="/login">Login</Link>
        </>
    );
}
import { useContext, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import { LoggedUserContext } from "../../shared/contexts";

export const Login = () => {   

    const  inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailLength = email.length * 1000;
  //Usando contexto para pegar informações comuns a todos os componentes que estejam dentro do mesmo contexto
  const loggedUserContext = useContext(LoggedUserContext);

    const handleLogin = () => {
        console.log(email);
        console.log(password);
        
        if(inputPasswordRef.current != null) {
            inputPasswordRef.current.focus()
        }
    };

    return (
        <div>

            <p>{loggedUserContext.userName}</p>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>
             
                <InputLogin 
                label="Email" 
                value={email} 
                onChange={newValue => setEmail(newValue) }
                onPressEnter={() => inputPasswordRef.current?.focus()}
                />

                <InputLogin 
                label="Password" 
                type="password"
                value={password}
                ref={inputPasswordRef}
                onChange={newValue => setPassword(newValue)}
                />
           
           {/* Passando filhos para o componente */}
           <ButtonLogin type="button" onClick={handleLogin}>
            Entrar na applicação
           </ButtonLogin>
            </form>           
        </div>
    );
}
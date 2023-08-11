import { useEffect, useState } from "react";

export const Login = () => {   

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect( () => {
        console.log("Bloco de código sendo executado!!")
    }, []);

    //Fazendo com que seja executado sempre que determinados valores sejam alterados
    useEffect( () => {
        console.log(email);
        console.log(password);
    }, [email, password]);


    const handleLogin = () => {
        console.log(email);
        console.log(password);
    };

    return (
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)} / >
                </label>
                <label>
                    <span>Password</span>
                    <input type="password"  value={password} onChange={e => setPassword(e.target.value)} / >
                </label>
                <button type="button" onClick={handleLogin}>Login</button>
            </form>  
          
        </div>
    );
}
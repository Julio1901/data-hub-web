import { useState } from "react";

export const Login = () => {   

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailLength = email.length * 1000;


    const handleLogin = () => {
        console.log(email);
        console.log(password);
    };

    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>
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
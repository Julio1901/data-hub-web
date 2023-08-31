
import { Title } from '../dashboard/components/title';
import * as S from '../dashboard/styles'
import { InputWithRoundedBorder } from "../../shared/components";
import { ButtonWithRoundedBorder } from "../../shared/components";
import { RoutePaths } from '../../routes/RoutePaths';
import { useNavigate } from 'react-router-dom';


export const Login = () => {   

    const navigate = useNavigate()
    

    const handleWithClickLogin = () => {
        console.log("Botão clicado")
        navigate(RoutePaths.Home)
    }


    return (
        <S.ContainerPrincipal>

            <S.ContainerPrincipalContent>
                <Title titleContent="Data Hub "/>
                <InputWithRoundedBorder placeholder="youremail@gmail.com"/>
                <InputWithRoundedBorder placeholder="password"/>
                <ButtonWithRoundedBorder buttonText="LOG IN" onClick={handleWithClickLogin}/>
            </S.ContainerPrincipalContent>
            
            
            {/* Primeiro modo de fazer navegação */}
            {/* <Link to="/login">Login</Link> */}
        </S.ContainerPrincipal>
    );

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // useEffect( () => {
    //     console.log("Bloco de código sendo executado!!")
    // }, []);

    // //Fazendo com que seja executado sempre que determinados valores sejam alterados
    // useEffect( () => {
    //     console.log(email);
    //     console.log(password);
    // }, [email, password]);


    // const handleLogin = () => {
    //     console.log(email);
    //     console.log(password);
    // };

    // return (
    //     <div>
    //         <form>
    //             <label>
    //                 <span>Email</span>
    //                 <input value={email} onChange={e => setEmail(e.target.value)} / >
    //             </label>
    //             <label>
    //                 <span>Password</span>
    //                 <input type="password"  value={password} onChange={e => setPassword(e.target.value)} / >
    //             </label>
    //             <button type="button" onClick={handleLogin}>Login</button>
    //         </form>  
          
    //     </div>
    // );
}
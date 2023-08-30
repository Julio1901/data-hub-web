import { Link } from "react-router-dom";
import { Title } from "./components/title";
import * as S from './styles'



export const Dashboard = () => {
    return (
        <S.ContainerPrincipal>

            <S.ContainerPrincipalContent/>
            <Title titleContent="Data Hub "/>
            
            {/* Primeiro modo de fazer navegação */}
            {/* <Link to="/login">Login</Link> */}
        </S.ContainerPrincipal>
    );
}
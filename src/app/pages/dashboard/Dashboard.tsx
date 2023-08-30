import { Link } from "react-router-dom";
import { Title } from "./components/title";
import * as S from './styles'
import { InputWithRoundedBorder } from "../../shared/components";



export const Dashboard = () => {
    return (
        <S.ContainerPrincipal>

            <S.ContainerPrincipalContent>
                <Title titleContent="Data Hub "/>
                <InputWithRoundedBorder placeholder="youremail@gmail.com"/>
                <InputWithRoundedBorder placeholder="password"/>
            </S.ContainerPrincipalContent>
            
            
            {/* Primeiro modo de fazer navegação */}
            {/* <Link to="/login">Login</Link> */}
        </S.ContainerPrincipal>
    );
}
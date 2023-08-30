import { Link } from "react-router-dom";
import { Title } from "./components/title";



export const Dashboard = () => {
    return (
        <>
            <Title titleContent="Data Hub "/>
            
            {/* Primeiro modo de fazer navegação */}
            <Link to="/login">Login</Link>
        </>
    );
}
import { Link } from "react-router-dom";

export const Dashboard = () => {
    return (
        <>
            <p>Dashboard</p>
            {/* Primeiro modo de fazer navegação */}
            <Link to="/login">Login</Link>
        </>
    );
}
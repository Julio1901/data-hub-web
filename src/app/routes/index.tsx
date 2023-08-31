import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import { Dashboard, Goal, Goals, Login } from "../pages";


export const ProjectRoutes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" element={<Login />}/>
                <Route path="/initial-page" element={<Dashboard />}/>
                <Route path="/goals" element={<Goals />}/>
                <Route path="/goal" element={<Goal />}/>
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Switch>
        </BrowserRouter>
    );
}
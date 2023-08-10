import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import { Dashboard, Login } from "../pages";


export const ProjectRoutes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" element={<Login />}/>
                <Route path="/initial-page" element={<Dashboard />}/>
                <Route path="*" element={<Navigate to="/initial-page"/>}/>
            </Switch>
        </BrowserRouter>
    );
}
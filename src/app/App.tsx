import { ProjectRoutes } from "./routes";
import {LoggedUserProvider} from "./shared/contexts"

export const App = () => {
  return (
    <LoggedUserProvider>
       <ProjectRoutes />
    </LoggedUserProvider>  
  );
}
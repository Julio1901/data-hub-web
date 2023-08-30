import { createContext } from "react";



interface ILoggedUserContextData {
    userName: string;
}

// Criando um contexto
export const LoggedUserContext = createContext<ILoggedUserContextData>({
   
} as ILoggedUserContextData);


interface ILoggedUserProviderProps {
    children: React.ReactNode;
}
//Componente para prover o contexto
export const LoggedUserProvider: React.FC<ILoggedUserProviderProps> = ({children}) => {

    return (
        <LoggedUserContext.Provider value={{userName: "Julio"}}>
            {children}
        </LoggedUserContext.Provider>
    );


}
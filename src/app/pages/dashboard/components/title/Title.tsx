import { DashboardTitle } from "./styles";

interface TitleProps {
    titleContent: string
}


export const Title : React.FC<TitleProps> = ({titleContent})  =>{
    return(
        <>
            <DashboardTitle>
                {titleContent}
            </DashboardTitle>
        </>
    );
}
import { useLocation } from "react-router-dom";
import { IGoal } from "../../shared/services/GoalData";
import { json } from "stream/consumers";

export const Goal: React.FC = props => {
   
    const location = useLocation();
    const goal = location.state as IGoal;

    return(
        <>
            <h2>Goal Details</h2>
            <p>Goal Name: {goal.name}</p>
            <p>Amount: {goal.amount}</p>
            <p>Reserved Amount: {goal.reservedAmount}</p>
        </>   
    );
}; 
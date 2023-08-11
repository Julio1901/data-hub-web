import { useEffect, useState } from "react";
import { Goal, getGoals } from "../../shared/services/GoalData";

export const Goals: React.FC = () => {
    const [goals, setGoals] = useState<Goal[]>([]);

    useEffect( () => {
        const fetchData = async () => {
            const data: Goal[] = await getGoals();
            setGoals(data);
            console.log("Get Goals Mock")
          };

          fetchData();
    }, []);

    return (
        <div >
        <h1>My personal Goals</h1>
        <ul>
          {goals.map(goal => (
            <li key={goal.name}>
              {goal.name}
            </li>
          ))}
        </ul>
      </div>
    );

};
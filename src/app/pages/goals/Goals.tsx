import { useEffect, useState } from "react";
import { IGoal, getGoals } from "../../shared/services/GoalData";
import { useNavigate } from "react-router-dom";
import { Console } from "console";

export const Goals: React.FC = () => {

    const navigate = useNavigate();
    const handleWithClick = (name: string) => {
        navigate("/goal");
    };


    const [goals, setGoals] = useState<IGoal[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data: IGoal[] = await getGoals();
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
                    <li key={goal.name}
                        style={{padding: '5px 0'}}
                        onClick={() => {
                            navigate("/goal",
                                {
                                    state: goal
                                }
                            )
                        }
                        }
                    >
                        {goal.name}

                    </li>
                ))}
            </ul>
        </div>
    );

};
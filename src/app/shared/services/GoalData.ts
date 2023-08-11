export interface Goal {
    name: string;
    amount: number;
    reservedAmount: number;
  }

  const API_END_POINT = "http://localhost:5050/getGoalsMock";
  
  export async function getGoals(): Promise<Goal[]> {
    try {
      const response = await fetch(API_END_POINT);
      if (!response.ok) {
        throw new Error("Error fetching mock goals");
      }
  
      const mockGoalsData: Goal[] = await response.json();
      console.log(JSON.stringify(mockGoalsData))

      return mockGoalsData;
    } catch (error) {
      console.error("ERROR: Get mock goals error:", error);
      return [];
    }
  }
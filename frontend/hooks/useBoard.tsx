import { useQuery } from "react-query";
import axios from "axios";

const fetchScores = async () => {
  try {
    const { data } = await axios.get("http://127.0.0.1:8000/scoreboard/");
    console.log(data);
    return data;
  } catch (error: any) {
    const errorBody = error.response.data;
    console.log(errorBody);
  }
};

const useBoard = () => {
  return useQuery("leaderborad", () => fetchScores());
};

export default useBoard;

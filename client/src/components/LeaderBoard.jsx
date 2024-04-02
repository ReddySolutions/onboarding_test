import { useEffect, useState } from "react";
import image from "../assets/profile.png";
import axios from "axios";

const headings = [
    "Rank",
    "username",
    "No. Of Completed Activities",
    "Total Score",
    "Level",
];

const LeaderBoard = () => {
    const [leaderBoardData, setLeaderBoardData] = useState([]);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/api/leaderboard/"
                );
                setLeaderBoardData(response.data.leaderboard);
            } catch (error) {
                console.error("Error fetching leaderboard:", error);
            }
        };
        fetchLeaderboard();
    }, []);

    const getLevel = (score) => {
        if (score < 50) {
            return "green";
        }
        else if (score < 100) {
            return "blue";
        }
        else {
            return "red";
        } 
    }

    return (
        <div className="h-screen bg-bgcolor flex flex-col text-white">
            <h1 className="text-center mt-12 text-5xl font-bold">LeaderBoard</h1>
            <div className="flex justify-center mt-16">
                <div className="relative">
                    <table className="text-sm text-left rtl:text-right border m-4 shadow-primary shadow-md border-primary">
                        <thead className="text-xs uppercase text-primary">
                            <tr>
                                {headings.map((heading, index) => (
                                    <th key={index} scope="col" className="px-6 py-3">
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {leaderBoardData.map((user, index) => (
                                <tr key={index} className="border-b">
                                    <td className="px-6 py-4">{index+1}</td>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium whitespace-nowrap flex items-center space-x-2"
                                    >
                                        <img
                                            src={image}
                                            className="rounded-full w-10 h-10"
                                            alt="profile image"
                                        />
                                        <div>{user.username}</div>
                                    </th>
                                    <td className="px-6 py-4">{user.completed_count}</td>
                                    <td className="px-6 py-4">{user.total_score}</td>
                                    <td className="px-6 py-4">
                                        <span className={`bg-${getLevel(user.total_score)}-300 text-${getLevel(user.total_score)}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded`}>
                                            {getLevel(user.total_score)}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default LeaderBoard;

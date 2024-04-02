import React, { useState, useEffect } from "react";

import "./style.css";

const Leaderboard = ({selectedUserId}) => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from API
    const fetchLeaderboardData = async (userId) => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/activities/leaderboard",
          {
            headers: {
              "X-User-Id": userId,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch leaderboard data");
        }

        const data = await response.json();
        setLeaderboard(data["data"]);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboardData(selectedUserId);
  }, [selectedUserId]);

  return (
    <div className="leaderboard">
      <h2 className="leaderboard-header">Leaderboard</h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={index}  className={user.id === selectedUserId ? "highlighted" : ""}>
              <td>{user.username}</td>
              <td>{user.total_score} Points</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Leaderboard;

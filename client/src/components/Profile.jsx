import image from "../assets/profile.png";
import axios from "axios";
import { useState, useEffect } from "react";

const headings = [
    "",
    "Activity Name",
    "Start Date",
    "End Date",
    "Is Completed",
    "Score",
];

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

const Profile = () => {
    const [userActivityData, setUserActivityData] = useState([]);
    const [userProfileData, setUserProfileData] = useState({});

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/api/user-progress/"
                );
                setUserActivityData(response.data.user_progress);
                setUserProfileData(response.data.user_profile);
            } catch (error) {
                console.error("Error fetching leaderboard:", error);
            }
        };
        fetchLeaderboard();
    }, []);

    return (
        <div className="h-screen bg-bgcolor flex flex-col text-white">
            <h1 className="text-center mt-12 text-5xl font-bold mb-24">
                User Profile
            </h1>
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between lg:mr-40 lg:ml-16">
                <div>
                    <div className="relative">
                        <table className="text-sm text-left rtl:text-right border m-4">
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
                                {userActivityData.map((activity, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="px-6 py-4">{index+1}</td>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium whitespace-nowrap flex items-center space-x-2"
                                        >
                                            {activity.activity_name}
                                        </th>
                                        <td className="px-6 py-4">{activity.started_at.slice(0, 10)}</td>
                                        <td className="px-6 py-4">{activity.ended_at.slice(0, 10)}</td>
                                        <td className="px-6 py-4 flex items-center">
                                            <div className={`h-2.5 w-2.5 rounded-full bg-${activity.completed? 'green' : 'red'}-500 me-2`}></div>
                                            {activity.completed? 'True' : 'False'}
                                        </td>
                                        <td className="px-6 py-4">{activity.score}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col space-y-2 items-center">
                        <img
                            src={image}
                            className="rounded-full w-72 mb-6"
                            alt="profile image"
                        />
                        <div className="font-semibold text-4xl">{userProfileData.username}</div>
                        <div className="flex space-x-2">
                            <p className="font-medium">Total Score :</p>
                            <p>{userProfileData.total_score}</p>
                            <p>|</p>
                            <p className="font-medium">Level :</p>
                            <div>
                                <span className={`bg-${getLevel(userProfileData.total_score)}-300 text-${getLevel(userProfileData.total_score)}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded`}>
                                    {getLevel(userProfileData.total_score)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

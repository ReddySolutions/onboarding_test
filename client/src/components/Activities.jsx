import axios from 'axios';
import { useState, useEffect } from 'react';


const Activities = () => {
    const [activities, setActivities] = useState([]);

    const startActivity = async (activity_id) => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/start-activity/", {
                    "activity_id" : activity_id
                }
            );
            console.log(response)
        } catch (error) {
            console.error("Error fetching leaderboard:", error);
        }

    }

    const completeActivity = async (activity_id) => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/complete-activity/", {
                    "activity_id" : activity_id
                }
            );
            console.log(response)
        } catch (error) {
            console.error("Error fetching leaderboard:", error);
        }

    }
    

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/api/activities/"
                );
                setActivities(response.data);
            } catch (error) {
                console.error("Error fetching leaderboard:", error);
            }
        };
        fetchActivities();
    }, []);
    

    return (
        <div className="bg-bgcolor sm:h-screen flex flex-col text-white pb-12">
            <h1 className="text-center mt-12 text-5xl font-bold">
                Activities
            </h1>
            <div className="text-center mt-8 text-lg p-2 sm:text-xl">
                Welcome to Activites Page!, Let&apos;s add more gamification to our training!
            </div>
            <div className="flex flex-wrap gap-16 mt-20 mx-12">
            {/* card  */}
            {activities.map((activity, index) => (
                <div key={index} className="max-w-sm flex flex-col border rounded-2xl p-3 shadow-md space-y-4 shadow-primary">
                    <h1 className="font-semibold text-2xl text-primary">
                        {activity.name}
                    </h1>
                    <p>
                        {activity.description}
                    </p>
                    <div>
                        <p>Start Date : {activity.start_date.slice(0, 10)}</p>
                        <p>End Date : {activity.start_date.slice(0, 10)}</p>
                    </div>
                    <div className="flex items-center space-x-4 m-2">
                        <button onClick={() => startActivity(activity.id)} className="border px-2 rounded-xl hover:text-primary hover:border-primary transition duration-200">
                            Start
                        </button>
                        <button onClick={() => completeActivity(activity.id)} className="border px-2 rounded-xl hover:text-primary hover:border-primary transition duration-200">
                            Complete
                        </button>
                    </div>
                </div>

            ))}

        </div>

        </div>
        
    )
}

export default Activities
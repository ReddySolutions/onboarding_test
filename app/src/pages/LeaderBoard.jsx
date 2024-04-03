import { useEffect, useState } from "react"
import { RiErrorWarningFill } from "react-icons/ri";
import { BiLoaderAlt } from "react-icons/bi";
import { MdOutlineModelTraining } from "react-icons/md";
import { Link } from "react-router-dom"
import { displayLeaderBoard } from "../utils/Apis"

const LeaderBoard = () => {
  const [data, setData] = useState([])
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    displayLeaderBoard()
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BiLoaderAlt className="animate-spin mr-2" />
        Loading rooms.....
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 flex justify-center items-center h-screen">
        <RiErrorWarningFill className="mr-2" />
        Error : {error}
      </div>
    );
  }

  return (
    <div>
      <p className="text-2xl font-bold mb-4">LeaderBoard</p>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Rank</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Score</th>
            <th className="border border-gray-300 px-4 py-2">Modules</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.username}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.score}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <div className="flex justify-center">
                  <Link to={`/training-module/${item.username}`} className="mr-2" title="Modules Taken">
                    <MdOutlineModelTraining className="fill-blue-600" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LeaderBoard

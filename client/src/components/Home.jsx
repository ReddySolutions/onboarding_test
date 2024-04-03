
import { Link } from "react-router-dom";
import { IoGameController } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Home = () => {
    return (
        <div className="bg-bgcolor flex flex-col h-screen text-white">
            <nav className="my-12 mx-16">
                <h1 className="text-4xl font-bold">Trainify</h1>
            </nav>
            <div className="text-center text-2xl font-medium mt-16">
                Gamifying the traning process!
            </div>
            <div className="flex flex-col mt-14 items-center space-y-4">
                <div className="flex space-x-4">
                    <Link className="border w-36 p-2 rounded-lg flex items-center hover:border-primary shadow-primary shadow-md transition duration-300" to="/leaderboard">
                        LeaderBoard
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                    <Link className="border  w-36 p-2 rounded-lg flex items-center justify-center space-x-2 hover:border-primary shadow-primary shadow-md transition duration-300" to="/profile">
                        <CgProfile className="text-primary" />
                        <span className="inline-block">Profile</span>
                    </Link>
                </div>

                <Link className="border  w-36 p-2 rounded-lg flex items-center justify-center space-x-2 hover:border-primary shadow-primary shadow-md transition duration-300" to="/activities">
                    <IoGameController className="text-primary" />
                    <span className="inline-block">Activities</span>
                </Link>
            </div>
        </div>
    )
}

export default Home

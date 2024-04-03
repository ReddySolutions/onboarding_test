
import LeaderBoard from "./components/LeaderBoard"
import Activities from "./components/Activities"
import Profile from "./components/Profile"
import Home from "./components/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "/leaderboard",
    element: <LeaderBoard/>,
  },
  {
    path: "/activities",
    element: <Activities/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  
]);
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

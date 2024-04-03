
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";
import Leaderboard from "./components/Leaderboard";
import Events from "./components/Events";
import Quizes from "./components/Quizes";
import Rewards from "./components/Rewards";
import Navbar from "./components/Navbar";
import Trainings from "./components/Trainings";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <div style={{ display: "flex" }}>
            <Sidebar />
            <div style={{ width: "80%", overflow:"auto", height:"100vh" }}>
              <Navbar/>
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/trainings" element={<Trainings />}></Route>
                <Route path="/leaderboard" element={<Leaderboard />}></Route>
                <Route path="/events" element={<Events />}></Route>
                <Route path="/quizes" element={<Quizes />}></Route>
                <Route path="/rewards" element={<Rewards />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;

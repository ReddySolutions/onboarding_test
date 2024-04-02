import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Leaderboard from "./screens/leaderBoard";
import CoursesList from "./screens/courseList";
import CourseDetails from "./screens/courseDetail";

const App = () => {
  const [selectedUserId, setSelectedUserId] = useState(2);
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Leaderboard</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/courses">View Courses</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Leaderboard  selectedUserId={selectedUserId}/>} />
          <Route path="/courses" element={<CoursesList selectedUserId={selectedUserId}/>} />
          <Route path="/courses/:id" element={<CourseDetails selectedUserId={selectedUserId}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

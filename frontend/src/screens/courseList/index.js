import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./style.css";

const CoursesList = ({selectedUserId}) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses for training
    const fetchCoursesData = async (userId) => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/activities",
          {
            headers: {
              "X-User-Id": userId,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch courses data");
        }

        const data = await response.json();
        setCourses(data["data"]);
      } catch (error) {
        console.error("Error fetching couses data:", error);
      }
    };

    fetchCoursesData(selectedUserId);
  }, [selectedUserId]);

  return (
    <div className="course">
      <h2>Courses</h2>
      {courses.map((course) => (
        <div className="card" key={course.id}>
          <div className="course-image"></div>
          <div className="course-content">
            <div className="course-title">
              <Link to={`/courses/${course.id}`}>{course.name}</Link>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default CoursesList;

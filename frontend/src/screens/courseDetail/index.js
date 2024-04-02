import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./style.css";

const CourseDetails = ({selectedUserId}) => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(false);
  const [courseHistory, setCourseHistory] = useState({});
  const [enrollmentStatus, setEnrollmentStatus] = useState("NOT_ENROLLED");

  const setEnrollmentStatusHelper = (data) => {
    if (data.completed === true) {
      setEnrollmentStatus("COMPLETED");
    } else {
      setEnrollmentStatus("ENROLLED");
    }
  };
  const enrollUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/activities/${id}/enroll`,
        {
          method: "POST",
          headers: {
            "X-User-Id": selectedUserId,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to enroll");
      }

      const data = await response.json();
      setCourseHistory(data["data"]);
      setEnrollmentStatusHelper(data["data"]);
    } catch (error) {
      console.error("Error enrolling in a course:", error);
    }
    setLoading(false);
  };

  const completeCourse = async () => {
    setLoading(true);
    let enrollmentId = courseHistory["id"];
    try {
      const response = await fetch(
        `http://localhost:8000/api/v1/activities/complete/${enrollmentId}`,
        {
          method: "POST",
          headers: {
            "X-User-Id": selectedUserId,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to complete course");
      }

      const data = await response.json();
      setCourseHistory(data);
      setEnrollmentStatusHelper(data["data"]);
    } catch (error) {
      console.error("Error completing in a course:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    // Fetch a single course using the ID from the URL
    const fetchCourseData = async (userId, courseId) => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/activities/${courseId}`,
          {
            headers: {
              "X-User-Id": userId,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch course data");
        }

        const data = await response.json();

        setCourse(data["data"]);
        fetchCourseHistory(userId, courseId);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };
    const fetchCourseHistory = async (userId, courseId) => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/activities/${courseId}/user`,
          {
            headers: {
              "X-User-Id": userId,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch course data");
        }

        const data = await response.json();
        if (data["data"].length > 0) {
          setEnrollmentStatusHelper(data["data"][0]);
          setCourseHistory(data["data"][0]);
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
      setLoading(false);
    };

    fetchCourseData(selectedUserId, id);
  }, [id, enrollmentStatus, selectedUserId]); // Add id as a dependency to re-fetch data when id changes

  return (
    <div className="course-details">
      <h2>Course Details</h2>
      <div className="card">
        <div className="course-image"></div>
        <div className="course-content">
          <div className="course-title">{course.name}</div>
          <div className="course-description">
            {course.description}
          </div>
          {loading ? <div>
            <p>Fetching data.....</p>
          </div>:
          <div className="mt-4">
            {enrollmentStatus === "NOT_ENROLLED" && (
              <button
                disabled={loading}
                onClick={enrollUser}
                className="enroll-button"
              >
                {loading ? "Loading..." : "Enroll Now"}
              </button>
            )}
            {enrollmentStatus === "ENROLLED" && (
              <button
                disabled={loading}
                className="enroll-button complete-button"
                onClick={completeCourse}
              >
                {loading ? "Loading..." : "Complete"}
              </button>
            )}
            {enrollmentStatus === "COMPLETED" && (
              <div className="scoreCard">
                <p>Score: {courseHistory.score}</p>
              </div>
            )}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;

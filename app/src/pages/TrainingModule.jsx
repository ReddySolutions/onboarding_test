import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getTrainingModulesByUserId } from "../utils/Apis";

const TrainingModule = () => {
  const [trainingModules, setTrainingModules] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const { userId } = useParams();

  const lastIndex = parseInt(userId.slice(-1));

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const moduleData = await getTrainingModulesByUserId(lastIndex);
        setTrainingModules(moduleData);
      } catch (error) {
        setErrorMessage("Failed to fetch training modules.");
      }
    };

    fetchModules();
  }, [lastIndex]);

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Training Modules</h1>
        <Link to="/" className="text-blue-500">Back to Home</Link>
      </div>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      <div className="timeline-container">
        {trainingModules.map(module => (
          <div key={module.id} className="timeline-item">
            <div className="timeline-content">
              <h2 className="text-xl font-semibold mb-2">{module.name}</h2>
              <p className="text-gray-600 mb-2">{module.description}</p>
              <p className="text-gray-600">Start Date: {formatDate(module.start_date)}</p>
              <p className="text-gray-600">End Date: {formatDate(module.end_date)}</p>
              <p>
                {module.is_active ? (
                  <span className="text-green-500">Active</span>
                ) : (
                  <span className="text-red-500">Inactive</span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingModule;

import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import useFetchData from "../../hooks";

const UserActivity = () => {
  const url = "http://localhost:8000/api/activities/"
  const { data, loading, error } = useFetchData(url);
  const [updateRes, setResponse] = useState(null);
  const [updateLoading, setLoading] = useState(false);
  const [updateError, setError] = useState(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const updateData = async (activity_id) => {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({activity_id}),
      });
      if (!response.ok) {
        throw new Error(`Failed to update data at ${url}`);
      }
      const responseData = await response.json();
      setResponse(responseData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="mt-5">
      {updateError && (
        <Alert variant="danger" dismissible>{updateError}</Alert>
      )}
      {updateRes && (
        <Alert variant="success" dismissible>
          <Alert.Heading>{updateRes.detail}</Alert.Heading>
          <p>Your score is: {updateRes.score}</p>
        </Alert>
      )}
      <div className="mb-5 text-left">
        <h3>Hello {data[0].user.username}!</h3>
        <span className="text-muted">Completed/Ongoing Training </span>
      </div>
      <Row>
        {data.map((activity, index) => {
          return (
            <Col key={index}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{activity.activity.name}</Card.Title>
                  <Card.Text>{activity.activity.description}</Card.Text>
                  <Button
                    style={{ backgroundColor: "#56949f" }}
                    disabled={activity.completed}
                    onClick={() => {updateData(activity.activity.id)}}
                  >
                    {activity.completed ? "Finished" : "Continue Training"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
      {updateLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  )
};

export default UserActivity;

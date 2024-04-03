import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import LeaderBoard from './components/LeaderBoard';
import UserActivity from './components/Activity';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [key, setKey] = useState('leaderBoard');

  return (
    <div className="App">
      <Container>
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-5 mt-5 TabNav"
          justify 
        >
          <Tab eventKey="leaderBoard" title="Leader Board">
            <LeaderBoard />
          </Tab>
          <Tab eventKey="profile" title="My Activities">
            <UserActivity />
          </Tab>
        </Tabs> 
      </Container>
    </div>
  );
}

export default App;

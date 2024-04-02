import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LeaderBoard from "./pages/LeaderBoard"
import TrainingModule from "./pages/TrainingModule"

function App() {
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <Router>
          <Routes>
            <Route path='/' element={<LeaderBoard />} />
            <Route path='/training-module/:userId' element={<TrainingModule />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App

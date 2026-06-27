import { useState } from 'react'
import './App.css'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import LandingPage from './pages/Landing.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

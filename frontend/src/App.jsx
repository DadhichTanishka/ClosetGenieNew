import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage"
import MainPage from "./MainPage";
// import {Brow}
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/MainPage" element={<MainPage/>}/>
      </Routes>
    </Router>
  )
}

export default App

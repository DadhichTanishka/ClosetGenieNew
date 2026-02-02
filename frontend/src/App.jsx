import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import MenPage from "./MenPage";
import WomenPage from "./WomenPage";
// import {Brow}
import './App.css'
import ErrorPage from "./Error";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/men" element={<MenPage/>}/>
        <Route path="/women" element={<WomenPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  )
}

export default App

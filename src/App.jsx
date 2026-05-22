import { Routes, Route } from "react-router-dom"

import Home_lk from "./pages/home_lk"
import Login from "./pages/login"
import Home from "./pages/home"
import Register from "./pages/register"
import Statistics from "./pages/statistics"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home_lk" element={<Home_lk />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/statistics" element={<Statistics />} />
    </Routes>
  )
}

export default App
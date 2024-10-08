import Homepage from "./components/Homepage"
import About from "./components/About"
import Credentials from "./components/Credentials"
import Works from "./components/Works"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className={`${isDarkMode ? "bg-[#0f0f0f]" : "bg-[#f7f9fc]"} h-screen w-screen`}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/credentials" element={<Credentials />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
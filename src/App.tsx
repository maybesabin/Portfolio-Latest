import Homepage from "./components/Homepage"
import About from "./components/About"
import Works from "./components/Works"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Techstack from "./components/Techstack"
import Contact from "./components/Contact"

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className={`${isDarkMode ? "bg-[#0f0f0f]" : "bg-[#f7f9fc]"} min-h-screen min-w-screen overflow-x-hidden`}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/works" element={<Works isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/techstack" element={<Techstack isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/contact" element={<Contact isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
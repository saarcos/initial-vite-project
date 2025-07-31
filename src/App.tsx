import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import TestPage from "./pages/TestPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page2" element={<TestPage />} />
    </Routes>
  )
}

export default App

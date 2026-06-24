import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from "./pages/Main/Main"


function MainApp() {

  return <div className="min-h-screen transition-all duration-300">
    <Routes>
      <Route>
        <Route path="*" element={<MainPage />} />
      </Route>
    </Routes>
  </div>
}

export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  )
}

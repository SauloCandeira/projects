import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";;
import  Projects  from './pages/Projects/Projects';;
import  ProjectDetails  from './pages/ProjectDetails/ProjectDetails'

export function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/Projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>

  )
}

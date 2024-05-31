import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Roadmap } from './pages/Roadmap';
import  Projects  from './pages/Projects/Projects';
import { Testes } from './pages/Testes';
import { Login } from './pages/Login';
import  ProjectDetails  from './pages/Project/ProjectDetails'

export function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/Roadmap" element={<Roadmap />} />
        <Route path="/testes" element={<Testes />} />
      </Routes>
    </BrowserRouter>

  )
}

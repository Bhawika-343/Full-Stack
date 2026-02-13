import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="page home">
      <h1>Home Page</h1>
    </div>
  )
}

function Profile() {
  return ( 
    <div className="page profile">
      <h1>Bhawika</h1>
      <h2>Full Stack Dev</h2>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="page dashboard">
      <h1>Contact Page</h1>
      <h2>HTML</h2>
      <h2>CSS</h2>
      <h2>JavaScript</h2>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      {/* Simple Navbar */}
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
